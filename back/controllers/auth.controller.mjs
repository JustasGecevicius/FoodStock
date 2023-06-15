import { config } from '../config/auth.config.mjs';
import { db } from '../models/index.mjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const User = db.user;
const Role = db.role;

export const signup = async (req, res) => {
  console.log('here');
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  try {
    const newUser = await user.save();
    if (req.body.roles) {
      console.log('SOME ROLE', req.body.roles);
      const rolesFound = await Role.find({
        name: { $in: req.body.roles },
      });
      if (!rolesFound) {
        res.status(500).send({ message: 'Error' });
        return;
      }
      newUser.roles = rolesFound.map((role) => role._id);
      await newUser.save();
      res.send({ message: 'User was registered successfully!' });
    } else {
      console.log('USER ROLE');
      const userRole = await Role.findOne({ name: 'user' });
      newUser.roles = [userRole._id];
      await newUser.save();
      res.send({ message: 'User was registered successfully!' });
    }
  } catch (error) {
    console.log(error, 'ERROROROROR');
    res.status(500).send({ message: error });
  }
};

export const signin = async (req, res) => {
  console.log('req.cookies');
  const userFound = User.findOne({
    username: req.body.usernameOrEmail,
  })
    .populate('roles', '-__v')
    .exec();

  const emailFound = User.findOne({
    email: req.body.usernameOrEmail,
  })
    .populate('roles', '-__v')
    .exec();

  const user = await Promise.all([userFound, emailFound]);
  const validUser =
    user.filter((user) => user).length === 0 ? undefined : user.filter((user) => user)[0];

  if (!validUser) {
    return res.status(404).send({ error: 'User Not found.' });
  }

  const passwordIsValid = bcrypt.compareSync(req.body.password, validUser.password);

  if (!passwordIsValid) {
    return res.status(401).send({
      error: 'Invalid Password!',
    });
  }
  const token = jwt.sign({ id: validUser.id }, config.secret);

  const authorities = [];

  for (let i = 0; i < validUser.roles.length; i++) {
    console.log(validUser.roles[i]);
    authorities.push('ROLE_' + validUser.roles[i].name.toUpperCase());
  }

  res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true });

  res.status(200).send({
    id: validUser._id || emailFound?._id,
    username: validUser.username || emailFound,
    email: validUser.email,
    roles: authorities,
  });
};
