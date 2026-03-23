import { resumeData } from "@/data/resume";
import TimelineEntry from "@/components/experience/TimelineEntry";
import AcademicsTrust from "@/components/experience/AcademicsTrust";

export const metadata = {
  title: "Experience & Career | Tilak Kumar",
  description:
    "Professional journey — architecting production logic at scale.",
};

export default function ExperiencePage() {
  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-[family-name:var(--font-body)] tracking-[0.2em] text-xs font-bold mb-4 block uppercase">
              The Digital Architect
            </span>
            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[0.9]">
              Architecting <br />
              <span className="text-primary">Production</span> Logic.
            </h1>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-full mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
            <span className="text-on-surface-variant text-sm font-medium tracking-wide">
              System Status: Active / Open for Innovation
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 space-y-24">
        {resumeData.experience.map((exp, i) => (
          <TimelineEntry
            key={exp.company}
            period={exp.periodShort}
            company={exp.company}
            role={exp.role}
            subtitle={exp.subtitle}
            tags={exp.tags}
            sections={exp.sections}
            featureGrid={exp.featureGrid}
            isCurrent={i === 0}
          />
        ))}
        <AcademicsTrust />
      </section>
    </main>
  );
}
