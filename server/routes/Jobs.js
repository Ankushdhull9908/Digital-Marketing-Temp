import express from "express";
import Job from "../models/Job.js";
import Application from "../models/Application.js";
import auth from "../routes/auth.js"; // ✅ middleware, NOT routes/auth.js

const router = express.Router();

// ─── STATIC ROUTES FIRST (before /:id) ───────────────────────────────────────

// GET /api/jobs/mine  — recruiter: jobs I posted
router.get("/mine", auth, async (req, res) => {
  try {
    const jobs = await Job.find({ postedBy: req.user._id }).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/jobs/user/my-applications  — applicant: see my own applications
// ⚠️ MUST be before /:id or Express will treat "user" as an ID
router.get("/user/my-applications", auth, async (req, res) => {
  try {
    const apps = await Application.find({ applicant: req.user._id })
      .sort({ createdAt: -1 })
      .populate("job", "title company location category isActive");
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH /api/jobs/applications/:appId/status  — recruiter updates application status
// ⚠️ MUST be before /:id or Express will treat "applications" as an ID
router.patch("/applications/:appId/status", auth, async (req, res) => {
  try {
    const app = await Application.findById(req.params.appId).populate("job");
    if (!app) return res.status(404).json({ error: "Application not found" });

    if (String(app.job.postedBy) !== String(req.user._id)) {
      return res.status(403).json({ error: "Not authorized" });
    }

    if (req.body.status !== undefined)        app.status        = req.body.status;
    if (req.body.recruiterNote !== undefined) app.recruiterNote = req.body.recruiterNote;
    await app.save();
    res.json(app);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── PUBLIC ROUTES ────────────────────────────────────────────────────────────

// GET /api/jobs  — public job board
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { isActive: true };
    if (category && category !== "All") filter.category = category;

    const jobs = await Job.find(filter)
      .sort({ createdAt: -1 })
      .populate("postedBy", "name email");
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/jobs  — create job
router.post("/", auth, async (req, res) => {
  try {
    const { title, company, location, category, description, type, salary } = req.body;
    if (!title || !company || !category) {
      return res.status(400).json({ error: "title, company and category are required" });
    }
    const job = await Job.create({
      title, company, location, category, description, type, salary,
      postedBy: req.user._id,
    });
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ─── DYNAMIC :id ROUTES LAST ──────────────────────────────────────────────────

// GET /api/jobs/:id
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate("postedBy", "name email");
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/jobs/:id  — update job (owner only)
router.put("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id, postedBy: req.user._id });
    if (!job) return res.status(404).json({ error: "Job not found or not authorized" });

    const fields = ["title","company","location","category","description","type","salary","isActive"];
    fields.forEach(f => { if (req.body[f] !== undefined) job[f] = req.body[f]; });
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/jobs/:id  — delete job (owner only)
router.delete("/:id", auth, async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id, postedBy: req.user._id });
    if (!job) return res.status(404).json({ error: "Job not found or not authorized" });
    await Application.deleteMany({ job: req.params.id });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/jobs/:id/apply
router.post("/:id/apply", auth, async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job || !job.isActive) return res.status(404).json({ error: "Job not found or closed" });

    const { coverLetter, resumeUrl } = req.body;
    const application = await Application.create({
      job:            req.params.id,
      applicant:      req.user._id,
      applicantName:  req.user.name  || "",
      applicantEmail: req.user.email || "",
      coverLetter:    coverLetter || "",
      resumeUrl:      resumeUrl   || "",
    });
    res.status(201).json(application);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: "You have already applied to this job" });
    }
    res.status(500).json({ error: err.message });
  }
});

// GET /api/jobs/:id/applications  — recruiter sees applicants
router.get("/:id/applications", auth, async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id, postedBy: req.user._id });
    if (!job) return res.status(403).json({ error: "Not authorized" });

    const apps = await Application.find({ job: req.params.id })
      .sort({ createdAt: -1 })
      .populate("applicant", "name email");
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;