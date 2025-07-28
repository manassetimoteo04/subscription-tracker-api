import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required"],
      trim: true,
      minLenght: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "User Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\s+\.\s+/, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "User Password is required"],
      minLenght: 6,
    },
  },
  { timestamps: true }
);

const User = mongoose.Model("User", userSchema);
export default User;
