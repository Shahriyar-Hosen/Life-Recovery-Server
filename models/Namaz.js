import mongoose from "mongoose";
const NamazSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    fajr: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    dhuhr: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    asr: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    maghrib: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
    isha: {
      complete: {
        type: Boolean,
        default: false,
      },
      jamaat: {
        type: Boolean,
        default: true,
      },
      takbir_e_ula: {
        type: Boolean,
        default: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Namaz", NamazSchema);
