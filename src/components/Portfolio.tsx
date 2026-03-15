"use client";

import { Navbar } from "@/components/themes/cosmic/Navbar";
import { Hero } from "@/components/themes/cosmic/Hero";
import { Experience } from "@/components/themes/cosmic/Experience";
import { Skills } from "@/components/themes/cosmic/Skills";
import { Projects } from "@/components/themes/cosmic/Projects";
import { Contact } from "@/components/themes/cosmic/Contact";

export default function Portfolio() {
  return (
    <main className="cosmic-bg min-h-screen text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-slate-500 bg-slate-950 text-sm">
        <p>&copy; {new Date().getFullYear()} Tilak Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}
