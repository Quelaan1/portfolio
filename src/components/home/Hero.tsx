"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <span className="text-secondary font-[family-name:var(--font-body)] tracking-[0.2em] text-xs font-bold uppercase flex items-center gap-2">
          <span className="w-8 h-[1px] bg-secondary" />
          {resumeData.personalInfo.tagline}
        </span>
        <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[0.95]">
          Architecting Resilient{" "}
          <br />
          <span className="text-primary">Digital Ecosystems.</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg mt-4 leading-relaxed">
          {resumeData.personalInfo.summary}
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <Link
            href="/projects"
            className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold tracking-tight hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-outline-variant text-primary px-8 py-3 rounded-xl font-bold tracking-tight hover:scale-[1.02] active:scale-95 hover:bg-primary/5 transition-all duration-300"
          >
            Download Resume
          </a>
          <div className="flex items-center gap-3 ml-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
            <span className="text-secondary text-sm font-medium tracking-wide">
              Open for Innovation
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
