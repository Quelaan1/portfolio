"use client";

import { motion } from "framer-motion";

export default function StatusBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-4xl"
    >
      <div className="bg-surface-container-highest/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center justify-between border border-outline-variant/10 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
              System Status: Active
            </span>
          </div>
          <div className="h-4 w-[1px] bg-outline-variant" />
          <span className="text-[10px] font-medium text-on-surface-variant uppercase tracking-wider hidden sm:inline">
            Uptime: 99.98%
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <div className="flex gap-1">
              <div className="w-3 h-1 bg-secondary rounded-full" />
              <div className="w-3 h-1 bg-secondary rounded-full" />
              <div className="w-3 h-1 bg-secondary rounded-full" />
              <div className="w-3 h-1 bg-outline-variant rounded-full" />
            </div>
            <span className="text-[9px] uppercase text-on-surface-variant mt-1">
              Network Load
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
