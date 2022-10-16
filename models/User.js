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
    jamat: {
      fajr: {
        type: String,
      },
      dhour: {
        type: String,
      },
      asr: {
        type: String,
      },
      maghrib: {
        type: String,
      },
      isha: {
        type: String,
      },
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
