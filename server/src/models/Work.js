import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
  {
    img: { type: String, default: "", trim: true },
    company_name: { type: String, required: true, trim: true },
    role: { type: String, default: "", trim: true },
    start: { type: String, default: "", trim: true },
    end: { type: String, default: "", trim: true },
    desc: { type: String, default: "", trim: true },
    documentLink: { type: String, default: "", trim: true },
    webLink: { type: String, default: "", trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Work", workSchema);
