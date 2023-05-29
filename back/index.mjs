import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { db } from "./models/index.mjs";
import authRoutes from "./routes/auth.routes.mjs";
import userRoutes from "./routes/user.routes.mjs";

const app = express();
dotenv.config();
const port = process.env.PORT;
const mongoDbUrl = process.env.MONGODB_URI;
const Role = db.role;

const corsOptions = {
  origin: "http://localhost:3001",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

authRoutes(app);
userRoutes(app);

(async () => {
  try {
    await db.mongoose.connect(mongoDbUrl);
    console.log("Connected to Mongo");
    initial();
  } catch (error) {
    console.error(error);
  }
})();

const initial = async () => {
  const count = await Role.estimatedDocumentCount();
  if (count === 0) {
    new Role({
      name: "user",
    })
      .save()
      .then((res) => {
        if (!res) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

    new Role({
      name: "moderator",
    })
      .save()
      .then((res) => {
        if (!res) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

    new Role({
      name: "admin",
    })
      .save()
      .then((res) => {
        if (!res) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
  }
};

app.listen(port || 3000, () => {
  console.log(`Example app listening on port ${port}`);
});
