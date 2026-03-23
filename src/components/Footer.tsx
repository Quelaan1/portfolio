import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-primary font-[family-name:var(--font-headline)] font-bold text-lg">
            Tilak Kumar
          </span>
          <p className="text-sm tracking-wide text-outline">
            &copy; {new Date().getFullYear()} Tilak Kumar. Digital Architect.
          </p>
        </div>
        <div className="flex gap-8 text-sm tracking-wide">
          <a
            href={resumeData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-secondary transition-all opacity-80 hover:opacity-100"
          >
            GitHub
          </a>
          <a
            href={resumeData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-outline hover:text-secondary transition-all opacity-80 hover:opacity-100"
          >
            LinkedIn
          </a>
          <div className="flex items-center gap-2 text-secondary font-medium opacity-80 hover:opacity-100">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            System Status: Active
          </div>
        </div>
      </div>
    </footer>
  );
}
