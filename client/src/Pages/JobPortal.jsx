import React, { useState } from "react";
import "./JobPortal.css";

const CATEGORIES = ["All", "Frontend", "Backend", "Fullstack", "Design", "Marketing"];

export default function JobPortal() {
  const [jobs, setJobs] = useState([
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      category: "Frontend",
      description: "Looking for a React developer with 2+ years experience. Knowledge of Tailwind CSS is a plus."
    },
    {
      title: "Backend Developer",
      company: "CodeBase",
      location: "Delhi, India",
      category: "Backend",
      description: "Node.js developer required with MongoDB knowledge and experience in REST APIs."
    }
  ]);

  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", company: "", location: "", category: "Frontend", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.company) return;
    setJobs([{ ...form }, ...jobs]);
    setForm({ title: "", company: "", location: "", category: "Frontend", description: "" });
    setShowModal(false);
  };

  const filteredJobs = activeCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  return (
    <div className="jp-main-wrapper">
      {/* Fixed Top Section */}
      <div className="jp-fixed-top">
        <nav className="jp-navbar">
          <div className="jp-nav-content">
            <h1 className="jp-logo">Job<span>Hub</span></h1>
            <button className="jp-add-btn" onClick={() => setShowModal(true)}>
              + Post a Job
            </button>
          </div>
        </nav>

        <header className="jp-hero">
          <h1>Find Your Next Role</h1>
          <div className="jp-filter-bar">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat} 
                className={`jp-filter-item ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>
      </div>

      {/* Scrollable Bottom Section */}
      <main className="jp-scroll-container">
        <div className="jp-content-inner">
          <div className="jp-grid">
            {filteredJobs.length === 0 ? (
              <div className="jp-empty">No jobs found in this category.</div>
            ) : (
              filteredJobs.map((job, index) => (
                <div className="jp-card" key={index}>
                  <div className="jp-card-top">
                    <span className="jp-cat-badge">{job.category}</span>
                    <span className="jp-type">Full-time</span>
                  </div>
                  <h3 className="jp-job-title">{job.title}</h3>
                  <p className="jp-comp-name">{job.company}</p>
                  <p className="jp-loc-text">📍 {job.location}</p>
                  <p className="jp-job-desc">{job.description}</p>
                  <button className="jp-view-btn">View Details</button>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Unique Scoped Modal */}
      {showModal && (
        <div className="jp-modal-overlay">
          <div className="jp-modal-box">
            <div className="jp-modal-head">
              <h2>Post a New Role</h2>
              <button className="jp-close-x" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <form className="jp-form" onSubmit={handleSubmit}>
              <div className="jp-form-row">
                <div className="jp-input-field">
                  <label>Title</label>
                  <input name="title" value={form.title} onChange={handleChange} required />
                </div>
                <div className="jp-input-field">
                  <label>Category</label>
                  <select name="category" value={form.category} onChange={handleChange}>
                    {CATEGORIES.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="jp-input-field">
                <label>Company</label>
                <input name="company" value={form.company} onChange={handleChange} required />
              </div>
              <div className="jp-input-field">
                <label>Location</label>
                <input name="location" value={form.location} onChange={handleChange} />
              </div>
              <div className="jp-input-field">
                <label>Description</label>
                <textarea name="description" value={form.description} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="jp-submit-action">Publish Job</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}