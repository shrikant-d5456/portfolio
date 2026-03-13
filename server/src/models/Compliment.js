import mongoose from "mongoose";

const complimentSchema = new mongoose.Schema(
  {
    img: { type: String, default: "", trim: true },
    name: { type: String, required: true, trim: true },
    comp: { type: String, default: "", trim: true },
    comment: { type: String, default: "", trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Compliment", complimentSchema);
