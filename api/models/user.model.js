import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1TQ6VO54YUhuqB6DjnqLl1Xjq3qUCFjlIp33TUkxkw&s",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
