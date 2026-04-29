// models/testimonial.model.js
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Client name is required"],
      trim: true,
    },
    role: {
      type: String,
      required: [true, "Role / designation is required"],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
      default: "",
    },
    text: {
      type: String,
      required: [true, "Testimonial text is required"],
      trim: true,
    },
    // Optional: URL to an avatar image; falls back to initials in the UI
    avatarUrl: {
      type: String,
      trim: true,
      default: "",
    },
    // 1–5 star rating (optional)
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,
    },
    // Order in which to display (lower = first)
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);