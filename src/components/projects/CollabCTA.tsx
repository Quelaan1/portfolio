"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CollabCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-surface-container-low rounded-[2rem] p-12 overflow-hidden text-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full technical-gradient opacity-5 blur-[120px]" />
      <div className="relative z-10">
        <h4 className="font-[family-name:var(--font-headline)] text-3xl font-bold mb-6">
          Interested in technical collaboration?
        </h4>
        <p className="text-on-surface-variant mb-10 max-w-xl mx-auto">
          Currently accepting complex architectural challenges in distributed
          computing and large-scale data engineering.
        </p>
        <Link
          href="/contact"
          className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full tracking-tight hover:scale-105 transition-transform inline-block"
        >
          Initiate Connection
        </Link>
      </div>
    </motion.section>
  );
}
