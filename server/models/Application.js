import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job:       { type: mongoose.Schema.Types.ObjectId, ref: "Job",  required: true },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    // Snapshot fields so we still show info even if job/user is deleted
    applicantName:  { type: String },
    applicantEmail: { type: String },
    coverLetter:    { type: String, default: "" },
    resumeUrl:      { type: String, default: "" },

    status: {
      type: String,
      enum: ["pending", "reviewed", "shortlisted", "rejected"],
      default: "pending",
    },

    // Recruiter notes (private)
    recruiterNote: { type: String, default: "" },
  },
  { timestamps: true }
);

// One application per job per applicant
applicationSchema.index({ job: 1, applicant: 1 }, { unique: true });

export default mongoose.model("Application", applicationSchema);