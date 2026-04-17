import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Mail, Download, Eye, Edit3, Plus, Trash2, Layout, X } from "lucide-react";

const PortfolioMaker = () => {
  const [activeTab, setActiveTab] = useState("edit");
  const [skillInput, setSkillInput] = useState("");
  const contentRef = useRef();

  const [formData, setFormData] = useState({
    name: "Anuj Hooda",
    role: "Full Stack Web Developer",
    email: "anuj.dev@example.com",
    about: "I build high-performance web applications with a focus on clean code and interactive user experiences.",
    skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    projects: [
      { title: "E-Commerce Platform", desc: "A modern storefront with real-time inventory and Stripe integration." },
      { title: "Interactive Portfolio", desc: "A recursive portfolio builder for developers." }
    ]
  });

  // FIXED: Correct implementation of useReactToPrint
  const handlePrint = useReactToPrint({
    contentRef: contentRef, // Note: newer versions use contentRef, older use content: () => contentRef.current
    documentTitle: `${formData.name}_Portfolio`,
  });

  const updateField = (field, value) => setFormData({ ...formData, [field]: value });

  // Skill Management
  const addSkill = (e) => {
    if (e) e.preventDefault();
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData({ ...formData, skills: [...formData.skills, skillInput.trim()] });
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({ ...formData, skills: formData.skills.filter(s => s !== skillToRemove) });
  };

  // Project Management
  const updateProject = (index, field, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][field] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: "New Project", desc: "Project description..." }]
    });
  };

  return (
    <div data-theme="light" className="min-h-96 bg-white text-slate-800 font-sans">
      
      {/* Header */}
      <header className="navbar bg-white border-b border-slate-100 px-6 md:px-12 sticky top-0 z-50">
        <div className="flex-1">
          <span className="text-xl font-black tracking-tighter text-slate-900 italic">
            PORTFOLIO<span className="text-primary">.LAB</span>
          </span>
        </div>
        <div className="flex-none">
          {/* FIXED: handlePrint is now called as a function */}
          <button onClick={() => handlePrint()} className="btn btn-primary btn-sm rounded-lg shadow-md gap-2">
            <Download size={16} />
            <span className="hidden sm:inline">Export PDF</span>
          </button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(88vh-64px)] overflow-hidden">
        
        {/* --- EDITOR PANEL --- */}
        <aside className={`flex-1 overflow-y-auto p-6 md:p-10 bg-white ${activeTab === 'preview' ? 'hidden lg:block' : 'block'}`}>
          <div className="max-w-xl mx-auto space-y-8">
            <header>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Configuration</h2>
              <p className="text-2xl font-bold text-slate-900">Customizer</p>
            </header>

            {/* Basic Info */}
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="form-control">
                  <label className="label font-bold text-[11px] uppercase text-slate-500 mb-1">Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} className="input border-none bg-slate-100 focus:ring-2 ring-primary/20" />
                </div>
                <div className="form-control">
                  <label className="label font-bold text-[11px] uppercase text-slate-500 mb-1">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className="input border-none bg-slate-100 focus:ring-2 ring-primary/20" />
                </div>
              </div>
              <div className="form-control">
                <label className="label font-bold text-[11px] uppercase text-slate-500 mb-1">Bio</label>
                <textarea value={formData.about} onChange={(e) => updateField("about", e.target.value)} className="textarea border-none bg-slate-100 focus:ring-2 ring-primary/20 h-20" />
              </div>
            </div>

            {/* Skill Tag Creator */}
            <section className="pt-6 border-t border-slate-100">
              <label className="label font-bold text-[11px] uppercase text-slate-500 mb-1">Expertise Tags</label>
              <form onSubmit={addSkill} className="flex gap-2 mb-4">
                <input 
                  type="text" 
                  placeholder="Add skill (e.g. JavaScript)" 
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  className="input input-sm flex-1 border-none bg-slate-100 focus:ring-2 ring-primary/20"
                />
                <button type="submit" className="btn btn-sm btn-square btn-primary"><Plus size={16}/></button>
              </form>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill, i) => (
                  <span key={i} className="badge badge-lg bg-slate-100 border-none py-4 gap-2 text-xs font-bold">
                    {skill}
                    <X size={12} className="cursor-pointer hover:text-error" onClick={() => removeSkill(skill)} />
                  </span>
                ))}
              </div>
            </section>

            {/* Project Experience */}
            <section className="pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-900">Projects</h3>
                <button onClick={addProject} className="btn btn-ghost btn-xs text-primary">+ Add</button>
              </div>
              <div className="space-y-4">
                {formData.projects.map((proj, idx) => (
                  <div key={idx} className="relative group p-4 rounded-xl bg-slate-100 border border-transparent hover:border-primary/20 transition-all">
                    <input 
                      className="bg-transparent font-bold text-slate-800 w-full outline-none mb-1" 
                      value={proj.title} 
                      onChange={(e) => updateProject(idx, "title", e.target.value)}
                    />
                    <textarea 
                      className="bg-transparent w-full text-xs text-slate-500 outline-none resize-none h-10" 
                      value={proj.desc} 
                      onChange={(e) => updateProject(idx, "desc", e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </aside>

        {/* --- PREVIEW PANEL --- */}
        <main className={`flex-1 bg-slate-50 p-4 md:p-8 overflow-y-auto overflow-x-hidden ${activeTab === 'edit' ? 'hidden lg:flex' : 'flex'} flex-col items-center border-l border-slate-100`}>
          <div className="flex items-center gap-2 mb-6 text-slate-400">
            <Layout size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Live Preview</span>
          </div>

          <div className="w-full flex justify-center origin-top scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 transition-transform duration-300">
            <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mb-20">
              <div ref={contentRef} className="p-16 md:p-20 text-slate-900">
                
                <div className="border-b-4 border-slate-900 pb-10 mb-12">
                  <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-2">{formData.name}</h1>
                  <p className="text-xl font-medium text-primary tracking-wide">{formData.role}</p>
                  <div className="mt-4 text-xs font-bold text-slate-400 flex items-center gap-2">
                    <Mail size={12}/> {formData.email}
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-12">
                  <div className="col-span-8 space-y-12">
                    <section>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">Profile</h3>
                      <p className="text-sm leading-relaxed text-slate-700">{formData.about}</p>
                    </section>
                    <section>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-6">Experience</h3>
                      <div className="space-y-8">
                        {formData.projects.map((proj, i) => (
                          <div key={i}>
                            <h4 className="font-bold text-lg mb-1">{proj.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">{proj.desc}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                  <div className="col-span-4 space-y-12">
                    <section>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((s, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-100 text-[9px] font-bold uppercase tracking-tighter rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Toggle */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-[100]">
        <div className="tabs tabs-boxed bg-white/90 backdrop-blur-md border border-slate-200 p-1 shadow-2xl">
          <button className={`tab tab-sm font-bold ${activeTab === 'edit' ? 'tab-active btn-primary text-white' : ''}`} onClick={() => setActiveTab('edit')}>Edit</button>
          <button className={`tab tab-sm font-bold ${activeTab === 'preview' ? 'tab-active btn-primary text-white' : ''}`} onClick={() => setActiveTab('preview')}>Preview</button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMaker;