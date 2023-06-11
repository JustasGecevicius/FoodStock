import { db } from '../models/index.mjs';

const ROLES = db.ROLES;
const User = db.user;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  console.log('CHECKDUP');
  // Username
  const foundUser = await User.findOne({
    username: req.body.username,
  }).exec();

  if (foundUser) {
    res.status(400).send({ message: 'Failed! Username is already in use!' });
    return;
  }

  // Email
  const foundEmail = await User.findOne({
    email: req.body.email,
  }).exec();

  if (foundEmail) {
    res.status(400).send({ message: 'Failed! Email is already in use!' });
    return;
  }
  next();
};

const checkRolesExisted = (req, res, next) => {
  console.log('CHECKDUP');
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`,
        });
        return;
      }
    }
  }

  next();
};

export const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
};
