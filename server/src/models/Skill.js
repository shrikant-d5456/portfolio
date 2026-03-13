import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    img: { type: String, default: "" },
    skill_name: { type: String, required: true, trim: true },
    range: { type: Number, min: 0, max: 100, default: 0 },
    desc: { type: String, default: "", trim: true },
    certificate: { type: String, default: "", trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Skill", skillSchema);
