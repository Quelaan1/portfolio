"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { resumeData } from "@/data/resume";
import { MouseEvent } from "react";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide uppercase">
            Available for Hire
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-8 tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            {resumeData.personalInfo.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          {resumeData.personalInfo.role} crafting{" "}
          <span className="text-blue-400 font-medium">scalable microservices</span>{" "}
          and{" "}
          <span className="text-emerald-400 font-medium">immersive frontends</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            View Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="group px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 text-slate-300 hover:text-white font-medium"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: resumeData.personalInfo.github },
              { icon: Linkedin, href: resumeData.personalInfo.linkedin },
              { icon: Mail, href: `mailto:${resumeData.personalInfo.email}` },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full glass-card hover:bg-white/10 transition-colors text-slate-300 hover:text-white"
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
