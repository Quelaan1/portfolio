import { resumeData } from "@/data/resume";
import FlagshipProject from "@/components/projects/FlagshipProject";
import ProjectCard from "@/components/projects/ProjectCard";
import CollabCTA from "@/components/projects/CollabCTA";
import StatusBar from "@/components/StatusBar";

export const metadata = {
  title: "Projects | Tilak Kumar",
  description:
    "System Architecture Portfolio — engineering high-performance distributed systems.",
};

export default function ProjectsPage() {
  const secondaryProjects = resumeData.projects.slice(1);

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-24">
        <div className="flex flex-col gap-4">
          <span className="uppercase tracking-[0.2em] text-secondary font-semibold text-xs flex items-center gap-2">
            <span className="w-8 h-[1px] bg-secondary" /> System Architecture
            Portfolio
          </span>
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1]">
            Architecting Resilient <br />
            <span className="text-primary">Digital Ecosystems.</span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-lg mt-6 leading-relaxed">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      </header>

      <FlagshipProject />

      <section className="grid md:grid-cols-2 gap-8 mb-24">
        {secondaryProjects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            tech={project.tech}
            stat={project.stat}
          />
        ))}
      </section>

      <CollabCTA />
      <StatusBar />
    </main>
  );
}
