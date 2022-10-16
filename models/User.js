import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fajr: {
      type: String,
      default: "",
    },
    dhour: {
      type: String,
      default: "",
    },
    asr: {
      type: String,
      default: "",
    },
    maghrib: {
      type: String,
      default: "",
    },
    isha: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      // required: true,
    },
    img: {
      type: String,
    },
    phone: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
