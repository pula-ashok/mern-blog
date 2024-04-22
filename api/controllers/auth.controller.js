import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      next(errorHandler(400, "all fields are required"));
      return;
    }
    // const hashPassword = await bcryptjs.hash(password, 10);
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
      await newUser.save();
      res.status(201).json("signup successful");
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
};
