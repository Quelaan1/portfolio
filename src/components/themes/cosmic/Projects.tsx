"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Github, ArrowUpRight } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Selected Works
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-3xl bg-slate-900/50 border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex gap-3">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-slate-300 hover:text-white"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {"highlights" in project && project.highlights ? (
                  <ul className="space-y-3 mb-8 flex-1">
                    {(
                      project.highlights as Array<{
                        label: string;
                        detail: string;
                      }>
                    ).map((highlight, i) => (
                      <li key={i} className="text-sm leading-relaxed">
                        <span className="font-semibold text-blue-400">
                          {highlight.label}
                        </span>
                        <span className="text-slate-500"> — </span>
                        <span className="text-slate-400">
                          {highlight.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-400 mb-8 leading-relaxed flex-1">
                    {"description" in project ? project.description : ""}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium tracking-wide uppercase text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
