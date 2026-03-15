"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-3xl border border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Ready to Collaborate?
          </h2>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time positions.
            Let's build something extraordinary together.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${resumeData.personalInfo.email}`}
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-3"
            >
              <Mail className="w-5 h-5" />
              <span>Send me an email</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={resumeData.personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
