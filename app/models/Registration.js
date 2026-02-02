import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    schoolName: { type: String, required: true },
    academicClass: {
      type: String,
      enum: ["7th", "8th", "9th", "10th"],
      required: true,
    },
    projectArea: { type: String, required: true },
    studentContact: { type: String, required: true },
    parentContact: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema);
