"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { resumeData } from "@/data/resume";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BentoGrid() {
  const flagship = resumeData.projects[0];
  const secondaryProjects = resumeData.projects.slice(1);
  const { stats } = resumeData;

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto px-6 md:px-8 space-y-3"
    >
      {/* Row 1: Flagship + Stats */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-3">
        <motion.div
          variants={item}
          className="bg-surface-container-low rounded-[2rem] p-8 md:p-10 relative overflow-hidden md:row-span-2 group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 technical-gradient opacity-10 blur-[80px]" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-xs font-bold rounded-full tracking-wider border border-outline-variant/20 uppercase">
                {flagship.type}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-bold mb-4 text-on-surface">
              {flagship.title}
            </h2>
            <p className="text-on-surface-variant text-base mb-6 max-w-lg leading-relaxed">
              {flagship.summary}
            </p>
            <div className="flex justify-center my-6">
              <PhoneMockup className="scale-[0.65]" />
            </div>
            <div className="flex flex-wrap gap-2">
              {flagship.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column: Amour highlights */}
        <motion.div
          variants={item}
          className="bg-surface-container-low rounded-[2rem] p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Database</span>
            </div>
            <div className="text-secondary text-3xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter mb-1">
              68
            </div>
            <div className="text-on-surface text-sm font-bold mb-2">Prisma Models</div>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              141 BTREE indexes with denormalized chat caching for 50x faster rendering
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-surface-container-low rounded-[2rem] p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Queuing</span>
            </div>
            <div className="text-secondary text-3xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter mb-1">
              4-Tier
            </div>
            <div className="text-on-surface text-sm font-bold mb-2">Priority System</div>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Presence-aware routing with circuit breaker pattern across 16 RabbitMQ exchanges
            </p>
          </div>
        </motion.div>
      </div>

      {/* Row 2: Secondary Projects */}
      <div className="grid md:grid-cols-2 gap-3">
        {secondaryProjects.map((project) => (
          <motion.div
            key={project.slug}
            variants={item}
            className="bg-surface-container-low rounded-[2rem] p-8 group hover:bg-surface-container-high transition-all duration-500"
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Project
            </div>
            <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold mb-2 text-on-surface">
              {project.title}
            </h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Row 3: Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-3">
        <motion.div variants={item}>
          <Link
            href="/experience"
            className="block bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-300 group"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-secondary text-xs uppercase tracking-widest font-semibold mb-2">
                  Experience
                </div>
                <div className="text-on-surface text-xl font-bold font-[family-name:var(--font-headline)]">
                  Career Timeline
                </div>
                <div className="text-on-surface-variant text-sm mt-1">
                  Avacend · Constient · 2022–Present
                </div>
              </div>
              <span className="text-primary text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link
            href="/contact"
            className="block bg-gradient-to-br from-primary/5 to-primary-container/15 rounded-[2rem] p-8 border border-primary/15 text-center hover:from-primary/10 hover:to-primary-container/20 transition-all duration-300"
          >
            <div className="text-on-surface text-xl font-bold font-[family-name:var(--font-headline)] mb-2">
              Let&apos;s Build Together
            </div>
            <div className="text-primary text-sm font-medium">
              Open for Innovation →
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Row 4: Tech Breadth Strip */}
      <motion.div
        variants={item}
        className="bg-surface-container-low rounded-[2rem] py-6 px-8 flex justify-center gap-8 md:gap-16 flex-wrap"
      >
        {[
          { value: stats.backendTechnologies, label: "Backend Technologies" },
          { value: stats.yearsEngineering, label: "Years Engineering" },
          { value: stats.microservicesBuilt, label: "Microservices Built" },
          { value: stats.productionSystems, label: "Production Systems" },
        ].map((stat, i, arr) => (
          <div key={stat.label} className="flex items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-primary text-2xl font-extrabold font-[family-name:var(--font-headline)]">
                {stat.value}
              </div>
              <div className="text-outline text-[10px] uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
            {i < arr.length - 1 && (
              <div className="w-[1px] h-8 bg-outline-variant hidden md:block" />
            )}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
