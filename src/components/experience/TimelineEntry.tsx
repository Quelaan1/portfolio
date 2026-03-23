"use client";

import { motion } from "framer-motion";
import { GitBranch, Terminal, Server } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  GitBranch,
  Terminal,
  Server,
};

interface Section {
  title: string;
  description: string;
  stat?: { value: string; label: string };
  stack?: string[];
}

interface FeatureGridItem {
  icon: string;
  label: string;
}

interface TimelineEntryProps {
  period: string;
  company: string;
  role: string;
  subtitle?: string;
  tags: string[];
  sections: Section[];
  featureGrid?: FeatureGridItem[];
  isCurrent?: boolean;
}

export default function TimelineEntry({
  period,
  company,
  role,
  subtitle,
  tags,
  sections,
  featureGrid,
  isCurrent = false,
}: TimelineEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative grid md:grid-cols-[1fr_2fr] gap-12 items-start"
    >
      <div className="md:sticky md:top-40 space-y-4">
        <div
          className={`font-[family-name:var(--font-headline)] text-2xl font-bold ${
            isCurrent ? "text-primary" : "text-outline"
          }`}
        >
          {period}
        </div>
        <h2 className="text-3xl font-bold tracking-tight">{company}</h2>
        <p className="text-on-surface-variant font-medium">
          {role}
          {subtitle && <span className="text-outline"> · {subtitle}</span>}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-container-highest text-secondary text-xs font-bold rounded-lg tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`bg-surface-container-low p-8 md:p-12 rounded-[2rem] relative overflow-hidden ${
          isCurrent ? "border-l-4 border-primary" : ""
        }`}
      >
        {!isCurrent && (
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        )}
        <div className="relative">
          {sections.length > 1 ? (
            <div className="grid md:grid-cols-2 gap-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-6">
                  <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold text-primary">
                    {section.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {section.description}
                  </p>
                  {section.stat && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Server size={20} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold tracking-tighter">
                          {section.stat.value}
                        </div>
                        <div className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">
                          {section.stat.label}
                        </div>
                      </div>
                    </div>
                  )}
                  {section.stack && (
                    <div className="p-6 bg-surface-container-high rounded-2xl space-y-3">
                      <div className="text-xs font-bold text-secondary tracking-widest uppercase">
                        Integration Stack
                      </div>
                      <div className="text-sm text-on-surface leading-loose">
                        {section.stack.map((s) => (
                          <span key={s}>
                            • {s}
                            <br />
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-10">
              <div className="max-w-xl">
                <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold text-secondary mb-4">
                  {sections[0].title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {sections[0].description}
                </p>
              </div>
              {featureGrid && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {featureGrid.map((f) => {
                    const Icon = iconMap[f.icon] || Server;
                    return (
                      <div
                        key={f.label}
                        className="p-4 bg-surface-container-highest rounded-xl"
                      >
                        <Icon className="text-secondary mb-2" size={20} />
                        <div className="text-sm font-bold">{f.label}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
