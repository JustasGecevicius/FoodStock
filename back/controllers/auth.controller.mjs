import { config } from "../config/auth.config.mjs";
import { db } from "../models/index.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const User = db.user;
const Role = db.role;

export const signup = async (req, res) => {
  // console.log(req);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  try {
    const newUser = await user.save();
    if (req.body.roles) {
      console.log("SOME ROLE", req.body.roles);
      const rolesFound = await Role.find({
        name: { $in: req.body.roles },
      });
      if (!rolesFound) {
        res.status(500).send({ message: "Error" });
        return;
      }
      newUser.roles = rolesFound.map((role) => role._id);
      await newUser.save();
      res.send({ message: "User was registered successfully!" });
    } else {
      console.log("USER ROLE");
      const userRole = await Role.findOne({ name: "user" });
      newUser.roles = [userRole._id];
      await user.save();
      res.send({ message: "User was registered successfully!" });
    }
  } catch (error) {
    console.log(error, "ERROROROROR");
    res.status(500).send({ message: error });
  }
};

export const signin = async (req, res) => {
  const userFound = await User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec();

  if (!userFound) {
    return res.status(404).send({ message: "User Not found." });
  }
  const passwordIsValid = bcrypt.compareSync(
    req.body.password,
    userFound.password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!",
    });
  }

  const token = jwt.sign({ id: userFound.id }, config.secret, {
    expiresIn: 86400, // 24 hours
  });

  const authorities = [];

  for (let i = 0; i < userFound.roles.length; i++) {
    authorities.push("ROLE_" + userFound.roles[i].name.toUpperCase());
  }
  res.status(200).send({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    roles: authorities,
    accessToken: token,
  });
};
