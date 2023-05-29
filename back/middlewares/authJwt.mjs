import jwt from "jsonwebtoken";
import { db } from "../models/index.mjs";
import { config } from "../config/auth.config.mjs";

const User = db.user;
const Role = db.role;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  const admin = await User.findById(req.userId).exec();
  if (admin) {
    const roles = await Role.find({
      _id: { $in: admin.roles },
    });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }

    res.status(403).send({ message: "Require Admin Role!" });
    return;
  }
};

const isModerator = async (req, res, next) => {
  const moderator = await User.findById(req.userId).exec();
  if (moderator) {
    const roles = await Role.find({
      _id: { $in: moderator.roles },
    });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }

    res.status(403).send({ message: "Requires Moderator Role!" });
    return;
  }
};

export const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
};
