import express from "express";
import dotenv from "dotenv";
import createDbConnection from "./db/createDbConnection.js";

const app = express();
dotenv.config();

app.listen(3000, () => {
  console.log("server is running at port 3000!!");
  createDbConnection();
});
