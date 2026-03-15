"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            Professional Journey
          </span>
        </motion.h2>

        <div className="relative border-l border-slate-800 ml-4 md:ml-10 space-y-16">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />

              <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-lg text-slate-400 mt-1">
                      <Briefcase size={18} className="text-blue-500" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end text-sm text-slate-500 space-y-1">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2 px-3 py-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
