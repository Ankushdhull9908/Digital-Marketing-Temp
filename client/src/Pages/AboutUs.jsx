import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, CheckCircle2, Award, Users, BarChart3, ArrowRight, MousePointer2 } from 'lucide-react';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const services = [
    { name: "Search Engine Optimization", icon: <BarChart3 size={24} /> },
    { name: "Google Ads (PPC)", icon: <Target size={24} /> },
    { name: "Social Media Marketing", icon: <Users size={24} /> },
    { name: "Website Development", icon: <Rocket size={24} /> },
    { name: "Content Marketing", icon: <Award size={24} /> },
    { name: "Lead Generation", icon: <CheckCircle2 size={24} /> }
  ];

  return (
    <div className="bg-white font-sans text-slate-900 selection:bg-[#3D7E8C]/20 overflow-x-hidden">
      
      {/* -- PREMIUM HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 bg-[#f8fafc] overflow-hidden">
        {/* Thematic Background Blurs */}
        <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-[#3D7E8C]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#F39221]/10 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-[#3D7E8C]/5 text-[#3D7E8C] font-black text-[10px] uppercase tracking-[0.4em] mb-8 border border-[#3D7E8C]/10">
              The Digital Vanguard
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-slate-900">
              Webtech <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D7E8C] to-[#2d5d67]">Services.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-12">
              Architecting <span className="text-[#F39221]">high-performance</span> digital ecosystems that translate complex data into market dominance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-[#F39221] hover:bg-[#d97f1a] text-white px-10 py-5 rounded-2xl font-bold tracking-tight transition-all flex items-center gap-2 shadow-xl shadow-[#F39221]/20 group">
                Scale Your Brand <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BENTO-STYLE STORY SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Narrative - Left Side */}
          <motion.div 
            className="lg:col-span-7 p-10 md:p-16 rounded-[3rem] bg-slate-900 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl"
            {...fadeIn}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <h2 className="text-4xl font-black mb-8 leading-tight relative z-10">
              Helping Businesses <br /> Succeed In A <span className="text-[#F39221]">Noisy World.</span>
            </h2>
            <div className="space-y-6 text-slate-100/80 text-lg font-medium relative z-10">
              <p>
                Founded on the principle of surgical digital marketing, we cut through the noise by prioritizing ROI over vanity metrics. 
              </p>
              <p>
                Our team is composed of developers, data scientists, and creative strategists who share one obsession: measurable business growth.
              </p>
            </div>
          </motion.div>
          
          {/* Mission/Vision - Right Side (Bento Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex-1 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group"
            >
              <div className="w-12 h-12 bg-[#F39221]/10 text-[#F39221] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F39221] group-hover:text-white transition-colors">
                <Target size={24} />
              </div>
              <div>
                <h4 className="font-black text-2xl text-[#3D7E8C] mb-2 tracking-tight">Our Mission</h4>
                <p className="text-slate-500 font-medium">To empower brands with lethal precision through smart, ROI-driven solutions.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex-1 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group"
            >
              <div className="w-12 h-12 bg-[#3D7E8C]/10 text-[#3D7E8C] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3D7E8C] group-hover:text-white transition-colors">
                <Eye size={24} />
              </div>
              <div>
                <h4 className="font-black text-2xl text-[#3D7E8C] mb-2 tracking-tight">Our Vision</h4>
                <p className="text-slate-500 font-medium">To be India's benchmark for digital innovation and strategic brand expansion.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#F39221] font-black uppercase text-[11px] tracking-widest mb-4 block">Core Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-black  tracking-tighter">What We Do.</h2>
            </div>
            <div className="w-full md:w-1/3 h-[2px] bg-slate-200 mb-4 hidden md:block"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#3D7E8C]/20 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#F39221] transition-colors duration-500">
                  {React.cloneElement(service.icon, { className: "text-[#3D7E8C] group-hover:text-white transition-colors" })}
                </div>
                <h4 className="text-2xl font-black  leading-tight mb-4 tracking-tight">{service.name}</h4>
                <p className="text-slate-500 text-sm font-medium">Precision engineering for high-stakes digital growth.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR APPROACH (Minimal & Tech-Focused) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-black mb-10 text-slate-900 leading-none">
              Strategic <span className="text-[#3D7E8C]">Methodology.</span>
            </h2>
            <div className="space-y-12 mt-12">
              {[
                { title: "Deep Audit", desc: "Understanding the DNA of your business and market.", icon: <BarChart3 /> },
                { title: "Tactical Execution", desc: "Surgical deployment of marketing assets.", icon: <MousePointer2 /> },
                { title: "Scale Optimization", desc: "Relentless monitoring to ensure maximum ROI.", icon: <Rocket /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full border-2 border-[#F39221]/30 flex items-center justify-center flex-shrink-0 text-[#F39221]">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-black text-xl  tracking-tight mb-1">{item.title}</h5>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-12 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden shadow-3xl"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3D7E8C]/10 rounded-full blur-[100px] -mr-40 -mt-40" />
            <h3 className="text-3xl font-black mb-12 text-[#F39221] tracking-tight">The Growth Engine.</h3>
            <ul className="space-y-6">
              {[
                "Target Audience Architecture", "Custom Conversion Funnels", "Continuous Performance Audits", "Full-Stack Tech Integration"
              ].map((step, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="w-10 h-10 rounded-full border-2 border-white/10 flex items-center justify-center font-black text-sm group-hover:bg-[#3D7E8C] transition-colors">
                    {i + 1}
                  </span>
                  <span className="text-slate-300 font-bold text-lg">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto p-16 md:p-24 rounded-[4rem] bg-slate-900 text-white shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] -ml-32 -mt-32" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F39221]/20 rounded-full blur-[100px] -mr-32 -mb-32 group-hover:opacity-40 transition-opacity duration-500" />
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 tracking-tighter">
          <span >Architect Your</span>   <br /> <span className="text-[#F39221]">Digital Legacy.</span>
          </h2>
          <p className="text-white/60 mb-12 text-lg font-medium relative z-10 max-w-xl mx-auto">
            Ready to convert your digital aspirations into aggressive business growth?
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-16 px-12 bg-[#3D7E8C] text-white rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 mx-auto shadow-2xl hover:bg-white hover:text-[#3D7E8C] transition-all duration-300 relative z-10"
          >
            Initiate Consultation <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
