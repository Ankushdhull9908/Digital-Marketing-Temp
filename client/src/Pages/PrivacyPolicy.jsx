import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Eye, Database, Cookie, UserCheck, Mail, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const sections = [
    {
      id: "collection",
      icon: <Database className="text-[#3D7E8C]" size={22} />,
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us when filling out forms, creating accounts, or communicating with us. This includes contact details (name, email address, phone number), billing information, and project specifications required to render our marketing services."
    },
    {
      id: "usage",
      icon: <Eye className="text-[#F39221]" size={22} />,
      title: "2. How We Use Your Data",
      content: "Your data is used strictly to execute campaign deliverables, improve user experience across our digital platforms, handle account management, and send essential administrative or project update notifications. We never sell or lease your personal data to third-party brokers."
    },
    {
      id: "cookies",
      icon: <Cookie className="text-[#3D7E8C]" size={22} />,
      title: "3. Cookies & Tracking Technologies",
      content: "WebTech utilizes essential and analytical cookies to remember session preferences, analyze traffic flow, and optimize page performance. You retain full controls via your browser settings to customize cookie consent options or block non-essential tracking."
    },
    {
      id: "security",
      icon: <Lock className="text-[#F39221]" size={22} />,
      title: "4. Data Security & Storage",
      content: "We implement enterprise-grade encryption protocols (SSL/TLS) for data in transit and at rest. Access to personal and proprietary business data is restricted strictly to authorized WebTech personnel who require it for operational fulfillment."
    },
    {
      id: "rights",
      icon: <UserCheck className="text-[#3D7E8C]" size={22} />,
      title: "5. Your Privacy Rights",
      content: "You have the right to request access to the personal data we hold about you, request corrections, or demand complete erasure of your record from our systems, subject to legal and contractually mandated compliance retention periods."
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Hero Header with Background Image */}
                {/* Hero Content */}
         <motion.div 
                   initial={{ opacity: 0, y: -20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6 }}
                   className="text-center space-y-4"
                 >
                   <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3D7E8C]/30 bg-[#3D7E8C]/10 text-[#3D7E8C] text-xs font-bold uppercase tracking-widest">
                    Data Protection
                   </div>
                   <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    Privacy<span className="text-[#F39221]">Policy</span>
                   </h1>
                   <p className="text-sm text-slate-600 font-medium max-w-lg mx-auto">
                     Last updated: September 2026. Please read these terms carefully before using WebTech services.
                   </p>
                 </motion.div>


        {/* Content Sections */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {sections.map((sec) => (
            <motion.div
              key={sec.id}
              variants={fadeInUp}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm hover:border-[#3D7E8C]/40 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  {sec.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900 tracking-wide">{sec.title}</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-1 sm:pl-12">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Footer Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#3D7E8C]/10 via-slate-50 to-[#F39221]/10 border border-[#3D7E8C]/20 rounded-3xl p-8 text-center space-y-4 shadow-sm"
        >
          <div className="w-12 h-12 bg-[#3D7E8C]/10 text-[#3D7E8C] rounded-2xl flex items-center justify-center mx-auto border border-[#3D7E8C]/20">
            <ShieldAlert size={22} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Questions about your privacy rights?</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Our Data Protection Officer is here to address any requests, inquiries, or data management options.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:privacy@webtech.com" 
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-gradient-to-r from-[#3D7E8C] to-[#2a5963] text-white text-sm font-bold shadow-lg shadow-[#3D7E8C]/20 hover:opacity-95 transition-all hover:-translate-y-0.5"
            >
              Contact Data Officer
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;