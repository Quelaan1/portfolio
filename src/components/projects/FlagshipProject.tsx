"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

export default function FlagshipProject() {
  const project = resumeData.projects[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <div className="grid md:grid-cols-12 gap-8 items-stretch">
        <div className="md:col-span-7 bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col justify-between p-10 relative group">
          <div className="absolute top-0 right-0 w-64 h-64 technical-gradient opacity-10 blur-[80px]" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-xs font-bold rounded-full tracking-wider border border-outline-variant/20 uppercase">
                {project.type}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-6 text-on-surface">
              {project.title}
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              {project.summary}
            </p>
            {project.detailCards && (
              <div className="grid grid-cols-2 gap-6">
                {project.detailCards.map((card) => (
                  <div
                    key={card.label}
                    className="p-4 bg-surface-container-high rounded-xl"
                  >
                    <span className="text-primary text-xs font-bold uppercase block mb-2">
                      {card.label}
                    </span>
                    <span className="text-on-surface font-medium">
                      {card.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col gap-8">
          {project.sidebar && (
            <div className="flex-1 bg-surface-container-high p-8 rounded-[2rem] border border-outline-variant/10">
              <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold mb-4 flex items-center gap-3">
                {project.sidebar.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {project.sidebar.description}
              </p>
            </div>
          )}
          <div className="flex-1 flex items-center justify-center min-h-[250px] relative">
            <PhoneMockup className="scale-[0.85] md:scale-100" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
