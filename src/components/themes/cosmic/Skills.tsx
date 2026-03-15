"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const SkillCard = ({ title, skills, delay }: { title: string; skills: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group"
  >
    <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
      <span className="w-2 h-8 bg-blue-500 rounded-full group-hover:h-12 transition-all duration-300" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-sm hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard title="Backend Engineering" skills={resumeData.skills.backend} delay={0} />
          <SkillCard title="Frontend Development" skills={resumeData.skills.frontend} delay={0.1} />
          <SkillCard title="Infrastructure & AI/ML" skills={resumeData.skills.infrastructure} delay={0.2} />
        </div>
      </div>
    </section>
  );
};
