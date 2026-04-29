// routes/testimonials.routes.js
import express from "express";
const router  = express.Router();
import Testimonial from '../models/Testimonial.js'

// ── GET /api/testimonials ─────────────────────────────────────────────────
// Public: returns only active testimonials (sorted by order asc)
// Admin:  pass ?all=true to get every record regardless of isActive
router.get("/", async (req, res) => {
  try {
    const filter = req.query.all === "true" ? {} : { isActive: true };
    const testimonials = await Testimonial.find(filter).sort({ order: 1, createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── GET /api/testimonials/:id ─────────────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const t = await Testimonial.findById(req.params.id);
    if (!t) return res.status(404).json({ message: "Testimonial not found" });
    res.json(t);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── POST /api/testimonials ────────────────────────────────────────────────
// Body: { name, role, company?, text, avatarUrl?, rating?, order?, isActive? }
router.post("/", async (req, res) => {
  try {
    const { name, role, company, text, avatarUrl, rating, order, isActive } = req.body;

    if (!name || !role || !text) {
      return res.status(400).json({ message: "name, role, and text are required" });
    }

    const t = await Testimonial.create({
      name,
      role,
      company:   company   ?? "",
      text,
      avatarUrl: avatarUrl ?? "",
      rating:    rating    ?? 5,
      order:     order     ?? 0,
      isActive:  isActive  !== undefined ? isActive : true,
    });

    res.status(201).json(t);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ── PUT /api/testimonials/:id ─────────────────────────────────────────────
// Full or partial update (all fields optional in body)
router.put("/:id", async (req, res) => {
  try {
    const { name, role, company, text, avatarUrl, rating, order, isActive } = req.body;

    const update = {};
    if (name      !== undefined) update.name      = name;
    if (role      !== undefined) update.role      = role;
    if (company   !== undefined) update.company   = company;
    if (text      !== undefined) update.text      = text;
    if (avatarUrl !== undefined) update.avatarUrl = avatarUrl;
    if (rating    !== undefined) update.rating    = rating;
    if (order     !== undefined) update.order     = order;
    if (isActive  !== undefined) update.isActive  = isActive;

    const t = await Testimonial.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    if (!t) return res.status(404).json({ message: "Testimonial not found" });
    res.json(t);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ── DELETE /api/testimonials/:id ──────────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    const t = await Testimonial.findByIdAndDelete(req.params.id);
    if (!t) return res.status(404).json({ message: "Testimonial not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

// ── Register in your app.js / server.js ───────────────────────────────────
// const testimonialRoutes = require("./routes/testimonials.routes");
// app.use("/api/testimonials", testimonialRoutes);