import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    gitLink: { type: String, default: "", trim: true },
    webLink: { type: String, default: "", trim: true },
    img: { type: String, default: "", trim: true },
    imageKey: { type: String, default: "", trim: true },
    projectName: { type: String, required: true, trim: true },
    skill: {
      type: [String],
      default: [],
    },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
