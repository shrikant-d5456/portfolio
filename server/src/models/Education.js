import mongoose from "mongoose";

const educationSchema = new mongoose.Schema(
  {
    img: { type: String, default: "", trim: true },
    skill_name: { type: String, default: "", trim: true },
    range: { type: Number, min: 0, max: 100, default: 0 },
    desc: { type: String, default: "", trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Education", educationSchema);
