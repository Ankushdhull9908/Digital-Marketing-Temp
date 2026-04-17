import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, CheckCircle2, Award, Users, BarChart3, Globe } from 'lucide-react';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    "Search Engine Optimization (SEO)", "Google Ads (PPC Campaigns)", 
    "Social Media Marketing (SMM)", "Website Design & Development", 
    "Content Marketing", "Lead Generation Services"
  ];

  const highlights = [
    { title: "Experienced Team", icon: <Users className="w-6 h-6" /> },
    { title: "Result-Oriented", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Custom Strategies", icon: <Target className="w-6 h-6" /> },
    { title: "Transparent ROI", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-[#001F3F] text-white"> {/* Dark Blue */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#2E8B57] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF8C00] rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Webtech <span className="text-[#2E8B57]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            A result-driven digital marketing company based in Delhi, dedicated to helping businesses grow in the digital world.
          </motion.p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-[#2E8B57] font-bold text-sm uppercase tracking-widest mb-2">Our Story</h2>
            <h3 className="text-3xl font-bold mb-6 text-[#001F3F]">Helping Businesses Succeed Online</h3>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Webtech Services was founded with a simple goal — to help businesses succeed online. We noticed that many businesses struggle to get results from digital marketing, and that’s where we stepped in.
            </p>
            <p className="text-slate-600 leading-relaxed">
              From small startups to growing brands, we have helped multiple clients build their online presence and achieve measurable growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              whileHover={{ x: 10 }}
              className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-[#2E8B57]"
            >
              <div className="flex items-center gap-4 mb-2">
                <Target className="text-[#FF8C00]" />
                <h4 className="font-bold text-xl text-[#001F3F]">Our Mission</h4>
              </div>
              <p className="text-slate-600">Empower businesses with smart, effective, and affordable digital solutions that deliver real results.</p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-[#FF8C00]"
            >
              <div className="flex items-center gap-4 mb-2">
                <Eye className="text-[#2E8B57]" />
                <h4 className="font-bold text-xl text-[#001F3F]">Our Vision</h4>
              </div>
              <p className="text-slate-600">To become one of the most trusted digital marketing agencies in India by consistently delivering value and innovation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">What We Do</h2>
            <div className="w-20 h-1 bg-[#2E8B57] mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 bg-slate-50 group"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#2E8B57] transition-colors duration-300">
                  <Rocket className="text-[#FF8C00] group-hover:text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold text-[#001F3F]">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Approach */}
      <section className="py-20 bg-[#001F3F] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-10 text-[#2E8B57]">Why Choose Webtech Services?</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg text-[#FF8C00]">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-sm text-slate-400">Delivering excellence through precision.</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Our Approach</h2>
              <ul className="space-y-4">
                {[
                  "Understanding your business goals",
                  "Analyzing your target audience",
                  "Creating customized strategies",
                  "Continuous monitoring & optimization",
                  "Delivering measurable results"
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#2E8B57] w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-300">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#2E8B57] to-[#1e5c3a] text-white shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Grow Together</h2>
            <p className="text-emerald-50 mb-8 text-lg">
              Whether you are a startup, small business, or an established brand, we are here to take your business to the next level.
            </p>
            <button className="bg-[#FF8C00] hover:bg-[#e67e00] text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
              Get In Touch Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;