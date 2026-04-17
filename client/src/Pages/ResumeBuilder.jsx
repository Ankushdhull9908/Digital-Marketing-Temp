import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const ResumeBuilder = () => {
  const { templateId } = useParams();
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    personal: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      profession: "",
    },
    summary: "",
    experience: [{ company: "", role: "", duration: "", desc: "" }],
    education: [{ school: "", degree: "", year: "" }],
    skills: ["React", "Tailwind"],
  });

  const handleChange = (section, field, value, index = null) => {
    if (index !== null) {
      const updatedSection = [...formData[section]];
      updatedSection[index][field] = value;
      setFormData({ ...formData, [section]: updatedSection });
    } else {
      setFormData({
        ...formData,
        [section]: { ...formData[section], [field]: value },
      });
    }
  };

  const steps = [
    { id: 1, name: "Heading", icon: "👤" },
    { id: 2, name: "Summary", icon: "📝" },
    { id: 3, name: "Experience", icon: "💼" },
    { id: 4, name: "Education", icon: "🎓" },
    { id: 5, name: "Skills", icon: "⚡" },
  ];

  return (
    <div className="min-h-96 bg-white font-sans text-slate-900">
      {/* 1. Header */}
      <header className="border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 bg-white z-[100]">
        <div className="flex items-center gap-4">
          <Link
            to="/TemplateSelect"
            className="btn btn-ghost btn-sm text-slate-500 hover:text-blue-600"
          >
            ← Back to Templates
          </Link>
          <div className="h-6 w-px bg-slate-200"></div>
          <h1 className="font-bold font-['Rajdhani'] text-xl tracking-wide uppercase text-slate-800">
            Editing:{" "}
            <span className="text-blue-600">
              {templateId?.replace("-", " ")}
            </span>
          </h1>
        </div>
        <button className="btn btn-primary btn-md rounded-full px-8 shadow-lg shadow-blue-200 font-bold">
          Download PDF
        </button>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(88vh-60px)]">
        {/* 2. Sidebar Steps */}
        <aside className="w-full lg:w-24 border-r border-slate-200 bg-slate-50 flex lg:flex-col items-center py-8 gap-8 overflow-x-auto">
          {steps.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrentStep(s.id)}
              className={`flex flex-col items-center justify-center transition-all group min-w-[80px] ${
                currentStep === s.id
                  ? "text-blue-600 scale-110"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <span
                className={`text-2xl mb-1 ${currentStep === s.id ? "opacity-100" : "opacity-60 grayscale"}`}
              >
                {s.icon}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                {s.name}
              </span>
              {currentStep === s.id && (
                <div className="h-1.5 w-6 bg-blue-600 rounded-full mt-2"></div>
              )}
            </button>
          ))}
        </aside>

        {/* 3. Middle: Form Inputs */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 font-['Rajdhani'] uppercase tracking-tight">
                {steps.find((s) => s.id === currentStep).name}{" "}
                <span className="text-blue-600">Details</span>
              </h2>
              <p className="text-slate-500 text-sm mt-2 font-medium">
                Please fill in the information exactly as you want it to appear.
              </p>
            </div>

            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-in slide-in-from-bottom-4 duration-500">
                <div className="form-control">
                  <label className="label font-bold text-slate-700 text-xs uppercase tracking-widest">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.personal.fname}
                    placeholder="First name"
                    className="input input-bordered bg-slate-50 border-slate-300 text-slate-900 rounded-xl focus:bg-white focus:border-blue-600 font-medium"
                    onChange={(e) =>
                      handleChange("personal", "fname", e.target.value)
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-slate-700 text-xs uppercase tracking-widest">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.personal.lname}
                    placeholder="Last name"
                    className="input input-bordered bg-slate-50 border-slate-300 text-slate-900 rounded-xl focus:bg-white focus:border-blue-600 font-medium"
                    onChange={(e) =>
                      handleChange("personal", "lname", e.target.value)
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-slate-700 text-xs uppercase tracking-widest">
                    Profession
                  </label>
                  <input
                    type="text"
                    value={formData.personal.profession}
                    placeholder="For eg. Frontend Developer"
                    className="input input-bordered bg-slate-50 border-slate-300 text-slate-900 rounded-xl focus:bg-white focus:border-blue-600 font-medium"
                    onChange={(e) =>
                      handleChange("personal", "profession", e.target.value)
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-slate-700 text-xs uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.personal.email}
                    placeholder="example@gmail.com"
                    className="input input-bordered bg-slate-50 border-slate-300 text-slate-900 rounded-xl focus:bg-white focus:border-blue-600 font-medium"
                    onChange={(e) =>
                      handleChange("personal", "email", e.target.value)
                    }
                  />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-slate-700 text-xs uppercase tracking-widest">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formData.personal.phone}
                    placeholder="+91 00000 00000"
                    className="input input-bordered bg-slate-50 border-slate-300 text-slate-900 rounded-xl focus:bg-white focus:border-blue-600 font-medium"
                    onChange={(e) =>
                      handleChange("personal", "phone", e.target.value)
                    }
                  />
                </div>
              </div>
            )}

            {/* Step 2: Summary */}
            {currentStep === 2 && (
              <div className="animate-in slide-in-from-bottom-4 duration-500">
                <label className="label font-bold text-slate-700 text-xs uppercase tracking-widest">
                  Professional Summary
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-56 bg-slate-50 border-slate-300 text-slate-900 rounded-xl text-lg p-6 focus:bg-white focus:border-blue-600 leading-relaxed font-medium"
                  placeholder="Tell your professional story..."
                  value={formData.summary}
                  onChange={(e) =>
                    setFormData({ ...formData, summary: e.target.value })
                  }
                ></textarea>
              </div>
            )}

            {/* Step 3: Experience */}
            {currentStep === 3 && (
              <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-10">
                {formData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="p-6 border border-slate-200 rounded-2xl bg-slate-50/50 relative"
                  >
                    <button
                      onClick={() => {
                        const newExp = formData.experience.filter(
                          (_, i) => i !== index,
                        );
                        setFormData({ ...formData, experience: newExp });
                      }}
                      className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                    >
                      ✕
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-control">
                        <label className="label font-bold text-slate-700 text-xs uppercase">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={exp.company}
                          className="input input-bordered bg-white border-slate-300 text-slate-900 rounded-xl"
                          onChange={(e) =>
                            handleChange("experience", "company", e.target.value, index)
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label font-bold text-slate-700 text-xs uppercase">
                          Job Title
                        </label>
                        <input
                          type="text"
                          value={exp.role}
                          className="input input-bordered bg-white border-slate-300 text-slate-900 rounded-xl"
                          onChange={(e) =>
                            handleChange("experience", "role", e.target.value, index)
                          }
                        />
                      </div>
                      <div className="form-control md:col-span-2">
                        <label className="label font-bold text-slate-700 text-xs uppercase">
                          Duration (e.g. 2022 - Present)
                        </label>
                        <input
                          type="text"
                          value={exp.duration}
                          className="input input-bordered bg-white border-slate-300 text-slate-900 rounded-xl"
                          onChange={(e) =>
                            handleChange("experience", "duration", e.target.value, index)
                          }
                        />
                      </div>
                      <div className="form-control md:col-span-2">
                        <label className="label font-bold text-slate-700 text-xs uppercase">
                          Job Description
                        </label>
                        <textarea
                          value={exp.desc}
                          className="textarea textarea-bordered bg-white border-slate-300 text-slate-900 rounded-xl h-32"
                          onChange={(e) =>
                            handleChange("experience", "desc", e.target.value, index)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() =>
                    setFormData({
                      ...formData,
                      experience: [
                        ...formData.experience,
                        { company: "", role: "", duration: "", desc: "" },
                      ],
                    })
                  }
                  className="btn btn-outline btn-primary btn-block rounded-xl border-dashed border-2"
                >
                  + Add Experience
                </button>
              </div>
            )}

            {/* Step 4: Education */}
            {currentStep === 4 && (
              <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-10">
                {formData.education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-6 border border-slate-200 rounded-2xl bg-slate-50/50 relative"
                  >
                    <button
                      onClick={() => {
                        const newEdu = formData.education.filter(
                          (_, i) => i !== index,
                        );
                        setFormData({ ...formData, education: newEdu });
                      }}
                      className="absolute top-4 right-4 text-red-500 p-2"
                    >
                      ✕
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="form-control md:col-span-2">
                        <label className="label font-bold text-slate-700 text-xs uppercase">
                          School / University
                        </label>
                        <input
                          type="text"
                          value={edu.school}
                          className="input input-bordered bg-white border-slate-300 text-slate-900 rounded-xl"
                          onChange={(e) =>
                            handleChange("education", "school", e.target.value, index)
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label font-bold text-slate-700 text-xs uppercase">
                          Degree
                        </label>
                        <input
                          type="text"
                          value={edu.degree}
                          className="input input-bordered bg-white border-slate-300 text-slate-900 rounded-xl"
                          onChange={(e) =>
                            handleChange("education", "degree", e.target.value, index)
                          }
                        />
                      </div>
                      <div className="form-control">
                        <label className="label font-bold text-slate-700 text-xs uppercase">
                          Year of Graduation
                        </label>
                        <input
                          type="text"
                          value={edu.year}
                          className="input input-bordered bg-white border-slate-300 text-slate-900 rounded-xl"
                          onChange={(e) =>
                            handleChange("education", "year", e.target.value, index)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() =>
                    setFormData({
                      ...formData,
                      education: [
                        ...formData.education,
                        { school: "", degree: "", year: "" },
                      ],
                    })
                  }
                  className="btn btn-outline btn-primary btn-block rounded-xl border-dashed border-2"
                >
                  + Add Education
                </button>
              </div>
            )}

            {/* Step 5: Skills */}
            {currentStep === 5 && (
              <div className="animate-in slide-in-from-bottom-4 duration-500">
                <label className="label font-bold text-slate-700 text-xs uppercase tracking-widest mb-4">
                  Core Skills
                </label>
                <div className="flex flex-wrap gap-3 mb-6 p-4 border border-slate-200 rounded-2xl bg-slate-50">
                  {formData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="badge badge-primary p-4 gap-2 font-bold rounded-lg shadow-md"
                    >
                      {skill}
                      <button
                        onClick={() => {
                          const newSkills = formData.skills.filter(
                            (_, i) => i !== index,
                          );
                          setFormData({ ...formData, skills: newSkills });
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    id="skillInput"
                    type="text"
                    placeholder="Add a skill (e.g. JavaScript)"
                    className="input input-bordered flex-1 bg-white border-slate-300 text-slate-900 rounded-xl font-medium"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value) {
                        setFormData({
                          ...formData,
                          skills: [...formData.skills, e.target.value],
                        });
                        e.target.value = "";
                      }
                    }}
                  />
                  <button
                    className="btn btn-primary rounded-xl px-6"
                    onClick={() => {
                      const input = document.getElementById("skillInput");
                      if (input.value) {
                        setFormData({
                          ...formData,
                          skills: [...formData.skills, input.value],
                        });
                        input.value = "";
                      }
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-16 flex justify-between items-center border-t border-slate-100 pt-10">
              <button
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                className={`btn btn-ghost rounded-full px-8 text-slate-400 font-bold ${currentStep === 1 ? "opacity-0" : "opacity-100"}`}
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1))}
                className="btn btn-primary rounded-full border-2 border-gray-200 px-12 font-bold hover:shadow-xl hover:shadow-blue-100"
              >
                {currentStep === 5 ? "Preview Final" : "Save & Continue"}
              </button>
            </div>
          </div>
        </main>

        {/* 4. Right Side: Real-time Preview */}
        <aside className="hidden lg:flex flex-1 bg-slate-100 p-10 items-start justify-center overflow-y-auto">
          <div className="sticky top-0 w-full max-w-[550px]">
            <div className="bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)] min-h-[770px] w-full p-14 transition-all duration-300 border border-slate-200">
              <div className={templateId === "samantha-williams" ? "border-t-[10px] border-blue-600 pt-8" : ""}>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tighter uppercase mb-2">
                  {formData.personal.fname || "FIRST"}{" "}
                  <span className="text-blue-600">
                    {formData.personal.lname || "LAST"}
                  </span>
                </h1>
                <p className="text-[12px] font-black text-slate-500 uppercase tracking-[0.3em] mb-8">
                  {formData.personal.profession || "YOUR PROFESSIONAL TITLE"}
                </p>

                <div className="flex flex-wrap gap-5 text-[11px] font-bold text-slate-400 mb-10 border-y py-4 border-slate-50">
                  <span>✉ {formData.personal.email || "EMAIL@EXAMPLE.COM"}</span>
                  <span>📞 {formData.personal.phone || "PHONE NUMBER"}</span>
                </div>

                {formData.summary && (
                  <div className="mb-10">
                    <h3 className="text-[11px] font-black uppercase text-blue-600 tracking-[0.2em] mb-4">Professional Profile</h3>
                    <p className="text-[13px] text-slate-700 leading-relaxed text-justify">{formData.summary}</p>
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-[11px] font-black uppercase text-blue-600 tracking-[0.2em] mb-4 border-b border-slate-100 pb-1">Work Experience</h3>
                  {formData.experience.map((exp, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-start">
                        <p className="text-[13px] font-bold text-slate-900 uppercase">{exp.role || "Job Role"}</p>
                        <p className="text-[10px] text-slate-400 font-bold">{exp.duration}</p>
                      </div>
                      <p className="text-[11px] text-blue-600 font-semibold mb-1 uppercase">{exp.company || "Company Name"}</p>
                      <p className="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">{exp.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-10">
                  <h3 className="text-[11px] font-black uppercase text-blue-600 tracking-[0.2em] mb-4 border-b border-slate-100 pb-1">Education</h3>
                  {formData.education.map((edu, i) => (
                    <div key={i} className="mb-4">
                      <p className="text-[12px] font-bold text-slate-900 uppercase">{edu.degree || "Degree Name"}</p>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-600 italic">{edu.school || "University/School"}</span>
                        <span className="text-slate-400 font-bold">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {formData.skills.length > 0 && (
                  <div>
                    <h3 className="text-[11px] font-black uppercase text-blue-600 tracking-[0.2em] mb-4 border-b border-slate-100 pb-1">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill, i) => (
                        <span key={i} className="text-[11px] bg-slate-100 px-2 py-1 rounded text-slate-700 font-bold uppercase">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Preview Sync Active
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ResumeBuilder;