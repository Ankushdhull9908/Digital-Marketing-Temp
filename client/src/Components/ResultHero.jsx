import React from 'react';
import { motion } from 'framer-motion'; // Step 1: Import motion
import { 
  CheckCircle, Quote, PhoneCall, HelpCircle, 
  ChevronDown, MessageSquare 
} from 'lucide-react';

const ResultHero = () => {
  // Brand Colors: Teal: #3D7E8C | Orange: #F39221

  const results = [
    "Higher Google Rankings", "More Website Traffic", 
    "Better Lead Generation", "Increased Sales", 
    "Strong Online Presence"
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="font-montserrat text-slate-800 overflow-hidden">
      
      {/* --- SECTION 1: EXPECTED RESULTS --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-[#3D7E8C]">🔷</span> Results You Can Expect
            </h2>
            <p className="text-slate-500 font-medium">Data-backed growth for your digital footprint.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {results.map((res, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ scale: 1.02, backgroundColor: "#fff" }}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border-b-4 border-[#3D7E8C] transition-shadow hover:shadow-md"
              >
                <CheckCircle className="text-[#3D7E8C] flex-shrink-0" size={24} />
                <span className="font-bold text-lg">{res}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-center tracking-tight mb-12"
          >
            <span className="text-[#3D7E8C]">🔷</span> Client Testimonials
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "Webtech Services helped us grow our business online and generate quality leads.", initial: "B", role: "Business Owner" },
              { text: "Highly professional team with great digital marketing strategies.", initial: "M", role: "Marketing Director" }
            ].map((client, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative p-10 rounded-[2rem] bg-[#F8FAFB] border border-slate-100"
              >
                <Quote className="absolute top-6 left-6 text-[#F39221]/20" size={40} fill="currentColor" />
                <p className="italic text-lg text-slate-600 mb-6 relative z-10 leading-relaxed">"{client.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#3D7E8C] flex items-center justify-center text-white font-bold">
                    {client.initial}
                  </div>
                  <div>
                    <p className="font-black text-sm text-slate-900 leading-none">{client.role}</p>
                    <p className="text-xs text-slate-400 mt-1">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CALL TO ACTION (CTA) --- */}
      <section className="px-6 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[3rem] bg-slate-800 p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Animated Background Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#3D7E8C] blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"
          ></motion.div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to Grow Your <br/>Business Online?</h2>
            <p className="text-teal-50 max-w-2xl mx-auto mb-10 text-lg font-medium">Partner with Webtech Services – your trusted digital marketing agency in Delhi. Let’s turn your vision into revenue.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#F39221] hover:bg-orange-500 text-white rounded-2xl font-black shadow-lg flex items-center justify-center gap-3"
              >
                <PhoneCall size={20} /> Contact Us Today
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#3D7E8C] hover:bg-slate-50 rounded-2xl font-black flex items-center justify-center gap-3"
              >
                <MessageSquare size={20} /> Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 4: FAQ SECTION --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-[#3D7E8C]">🔷</span> FAQ Section
            </h2>
            <p className="text-slate-500 font-medium">Quick answers to boost your SEO knowledge.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {[
              { q: "Why choose Webtech Services?", a: "We provide customized, result-driven strategies that help businesses grow faster by focusing on ROI." },
              { q: "How long does SEO take?", a: "SEO is a long-term investment. It usually takes 3–6 months depending on competition." },
              { q: "Do you provide Google Ads?", a: "Yes, we run high-performing PPC campaigns specializing in lead generation." }
            ].map((faq, i) => (
              <motion.details 
                key={i} 
                variants={fadeInUp}
                className="group p-6 rounded-2xl bg-[#F8FAFB] border border-transparent hover:border-[#3D7E8C]/20 transition-all cursor-pointer shadow-sm"
              >
                <summary className="flex items-center justify-between font-black text-slate-800 list-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-[#3D7E8C]" size={20} />
                    {faq.q}
                  </div>
                  <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400" size={20} />
                </summary>
                <p className="mt-4 text-slate-600 font-medium leading-relaxed pl-8 border-l-2 border-[#3D7E8C]">
                  {faq.a}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResultHero;