import mongoose from "mongoose";
import { Model, model, ObjectId, Schema } from "mongoose";

const storeImageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    image: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);
const StoreImage =
  mongoose.models.StoreImage || model("StoreImage", storeImageSchema);
export default StoreImage;
