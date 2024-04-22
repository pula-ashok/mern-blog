import express from "express";
import dotenv from "dotenv";
import createDbConnection from "./db/createDbConnection.js";
import userRouter from "../api/routes/user.routes.js";
import authRouter from "../api/routes/auth.routes.js";

const app = express();

dotenv.config();
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(3000, () => {
  console.log("server is running at port 3000!!");
  createDbConnection();
});
