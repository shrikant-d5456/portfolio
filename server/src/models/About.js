import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
  {
    heading: {
      type: [String],
      default: [],
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    resume_link: {
      type: String,
      default: "",
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("About", aboutSchema);
