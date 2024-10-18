import mongoose from "mongoose";
import { Model, model, ObjectId, Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      trim: true,
      unique:true
    },
    surName: {
      type: String,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    userName: {
      type: String,
      trim: true,
      unique:true
    },
    email: {
      type: String,
      trim: true,
      unique:true
    },
    Address1: {
      type: String,
      trim: true,
    },
    Address2: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
      required:true
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.models.User ||model("User", userSchema)
export default User;
