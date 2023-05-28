import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;
const mongoDbUrl = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

(async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log("Connected to Mongo");
  } catch (error) {
    console.error(error);
  }
})();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
