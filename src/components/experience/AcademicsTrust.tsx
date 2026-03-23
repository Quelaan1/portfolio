"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, BadgeCheck, Lightbulb } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function AcademicsTrust() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-12 border-t border-outline-variant/20"
    >
      <h2 className="font-[family-name:var(--font-headline)] text-3xl font-extrabold tracking-tight mb-12">
        Academics &amp; Trust
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-surface-container-high p-8 rounded-2xl group transition-all hover:bg-surface-container-highest">
          <GraduationCap className="text-primary mb-6" size={36} />
          <h3 className="text-xl font-bold mb-2">
            {resumeData.education.degree}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {resumeData.education.description}
          </p>
        </div>

        <div className="bg-surface-container-high p-8 rounded-2xl group transition-all hover:bg-surface-container-highest">
          <BadgeCheck className="text-secondary mb-6" size={36} />
          <h3 className="text-xl font-bold mb-2">Industry Certifications</h3>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              <span>Cloud Computing</span>
              <span className="text-secondary">PRO</span>
            </div>
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-full" />
            </div>
          </div>
        </div>

        <div className="bg-surface-container-high p-8 rounded-2xl border-2 border-primary/20 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full technical-gradient flex items-center justify-center mb-6">
            <Lightbulb className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Open for Innovation</h3>
          <p className="text-on-surface-variant text-sm">
            Actively seeking strategic technical partnerships and breakthrough
            projects.
          </p>
          <Link
            href="/contact"
            className="mt-6 text-primary font-bold text-sm tracking-widest uppercase hover:underline"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
