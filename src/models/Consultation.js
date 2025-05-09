import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  websiteType: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Consultation || mongoose.model('Consultation', consultationSchema);