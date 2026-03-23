"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

const MAP_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbkhxR5f1nksiv2aHvWJuHLiIvBn3shuG-mLKSmkGKVpr63vosXl4S59Gsu5uF9Mr1FBKU0xX2UmsWkJQGwkSaXicefbtkQTC139sBtAWNwzNLoKJkl43R6WpWGzjkTLmOaF6fYpO0xaEQhWbLyKHBuaiDHp5gT86T0TLkBcUa6pc_KhyhMaxbf6ubm2zAKvhGecQhLz5lcKDHp8NZhF1dO1VLw8PopXTABm1DgV0HuUeX7756u8eDgdHKsE1IbpE2KWMEZi8eCDQ";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-32 relative h-[400px] w-full bg-surface-container-low rounded-xl overflow-hidden group"
    >
      <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          alt="Stylized dark minimalist map of Bangalore India"
          src={MAP_IMAGE_URL}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

      <div className="absolute bottom-12 left-12 space-y-2 bg-surface-container-highest/80 backdrop-blur-md p-6 rounded-lg border border-outline-variant/15">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_#6bd8cb]" />
          <h4 className="font-[family-name:var(--font-headline)] font-bold text-xl">
            Headquarters Alpha
          </h4>
        </div>
        <p className="text-on-surface-variant font-mono text-sm tracking-tighter">
          COORD: {resumeData.personalInfo.coordinates}
        </p>
        <div className="pt-4 flex gap-4 text-xs tracking-widest uppercase text-secondary">
          <span>Active Relay</span>
          <span className="opacity-50">Secure Zone</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 animate-pulse shadow-[0_0_15px_rgba(208,188,255,0.5)]" />
    </motion.div>
  );
}
