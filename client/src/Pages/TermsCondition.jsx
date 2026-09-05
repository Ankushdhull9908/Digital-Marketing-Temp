import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, FileText, Lock, Scale, AlertCircle, Mail } from 'lucide-react';

const TermsAndConditions = () => {
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
      id: "acceptance",
      icon: <ShieldCheck className="text-[#F39221]" size={22} />,
      title: "1. Acceptance of Terms",
      content: "By accessing or using the services provided by WebTech, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to all of these terms, you may not access or use our services."
    },
    {
      id: "intellectual-property",
      icon: <FileText className="text-[#3D7E8C]" size={22} />,
      title: "2. Intellectual Property Rights",
      content: "All content, designs, source code, logos, brand elements, and graphics published on this website are the exclusive intellectual property of WebTech unless otherwise specified. Unlawful reproduction, redistribution, or modification without written permission is strictly prohibited."
    },
    {
      id: "user-responsibilities",
      icon: <Lock className="text-[#F39221]" size={22} />,
      title: "3. User Conduct & Security",
      content: "You agree to use our site and services only for lawful purposes. You must not attempt to breach security, gain unauthorized access to server infrastructure, upload malicious software, or disrupt service operational integrity."
    },
    {
      id: "payments-services",
      icon: <Scale className="text-[#3D7E8C]" size={22} />,
      title: "4. Service Deliverables & Payments",
      content: "Service proposals, milestone schedules, and payment schedules are specified in individual client agreements. WebTech reserves the right to suspend or terminate ongoing project deliverables in the event of overdue or defaulted payments."
    },
    {
      id: "limitation-liability",
      icon: <AlertCircle className="text-[#F39221]" size={22} />,
      title: "5. Limitation of Liability",
      content: "To the maximum extent permitted by applicable law, WebTech shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use our services or website."
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        

        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3D7E8C]/30 bg-[#3D7E8C]/10 text-[#3D7E8C] text-xs font-bold uppercase tracking-widest">
            Legal Agreement
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
            Terms & <span className="text-[#F39221]">Conditions</span>
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
          <div className="w-12 h-12 bg-[#F39221]/10 text-[#F39221] rounded-2xl flex items-center justify-center mx-auto border border-[#F39221]/20">
            <Mail size={22} />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">Have questions about our terms?</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            If you have any questions or concerns regarding our legal terms or services, feel free to contact our legal team.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-2xl bg-gradient-to-r from-[#F39221] to-[#e07f0d] text-white text-sm font-bold shadow-lg shadow-[#F39221]/20 hover:opacity-95 transition-all hover:-translate-y-0.5"
            >
              Contact Legal Team
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TermsAndConditions;