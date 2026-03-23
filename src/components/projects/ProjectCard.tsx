"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  summary: string;
  tech: string[];
  stat?: { value: string; label: string };
}

export default function ProjectCard({
  title,
  summary,
  tech,
  stat,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface-container-low p-10 rounded-[2rem] group hover:bg-surface-container-high transition-all duration-500"
    >
      {stat && (
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <svg
              className="text-primary"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <div className="text-right">
            <span className="text-secondary text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tighter">
              {stat.value}
            </span>
            <span className="text-on-surface-variant text-[10px] block uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        </div>
      )}
      <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-4 text-on-surface">
        {title}
      </h3>
      <p className="text-on-surface-variant mb-8 leading-relaxed">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
