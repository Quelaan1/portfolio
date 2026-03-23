import { Download, Mail, MapPin, Terminal, Globe } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Dossier() {
  const { personalInfo } = resumeData;

  return (
    <div className="lg:col-span-5 space-y-16">
      <section>
        <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-8 text-on-surface">
          Professional Dossier
        </h3>
        <div className="bg-surface-container-low p-8 rounded-xl space-y-8 relative overflow-hidden group">
          <p className="text-on-surface-variant leading-relaxed">
            A comprehensive record of architectural leadership, technical
            orchestration, and strategic digital execution.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-3 bg-surface-container-highest text-primary px-6 py-4 rounded-lg font-bold border border-outline-variant/15 hover:bg-primary/10 transition-all w-full md:w-auto"
          >
            <Download size={20} />
            Download Full Resume PDF
          </a>
        </div>
      </section>

      <section>
        <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-8 text-on-surface">
          Direct Channels
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-on-surface-variant mb-1">
                Secure Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-on-surface-variant mb-1">
                Operational Hub
              </p>
              <p className="text-lg font-medium">{personalInfo.location}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-8 text-on-surface">
          Social Graph
        </h3>
        <div className="flex gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-highest transition-all duration-300"
          >
            <Terminal size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-highest transition-all duration-300"
          >
            <Globe size={24} />
          </a>
        </div>
      </section>
    </div>
  );
}
