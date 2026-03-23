# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio from a single-page cosmic theme to a multi-page Stitch-themed site with Home (bento grid), Projects, Experience, and Contact pages.

**Architecture:** Clean slate component structure replacing `themes/cosmic/`. Four Next.js App Router pages sharing Navbar + Footer. Data driven by updated `resume.ts`. Stitch design tokens via Tailwind CSS 4 custom theme.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4, Framer Motion, lucide-react, Web3Forms (contact form)

**Spec:** `docs/superpowers/specs/2026-03-23-portfolio-redesign-design.md`

**Stitch HTML references:** `stitch-designs/html/experience-career.html`, `stitch-designs/html/contact-resume.html`, `stitch-designs/html/projects-library.html`

---

## Task 1: Copy assets and clean up old code

**Files:**
- Delete: `src/components/Portfolio.tsx`
- Delete: `src/components/themes/cosmic/` (entire directory)
- Create: `public/images/amour-mockup.jpg` (copy from Amour project)
- Create: `public/images/amour-icon.png` (copy from Amour project)

- [ ] **Step 1: Copy Amour assets into the portfolio project**

```bash
cp /Users/tilak/Work/TurtleByte/amour-website/public/images/hero-profile.jpg /Users/tilak/Work/Portfolio/my-portfolio/public/images/amour-mockup.jpg
cp /Users/tilak/Work/TurtleByte/amour-website/public/images/amour-icon.png /Users/tilak/Work/Portfolio/my-portfolio/public/images/amour-icon.png
```

Verify: `ls -lh public/images/amour-*`
Expected: Two files — `amour-mockup.jpg` (~31KB) and `amour-icon.png` (~24KB)

- [ ] **Step 2: Delete old cosmic theme components**

```bash
rm src/components/Portfolio.tsx
rm -rf src/components/themes/
```

Verify: `ls src/components/`
Expected: Empty directory (or just the directory itself)

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove cosmic theme, add Amour assets for redesign"
```

---

## Task 2: Update globals.css with Stitch design tokens

**Files:**
- Modify: `src/app/globals.css`

Replace the entire file with Stitch design tokens. Uses Tailwind CSS 4's `@theme` directive for custom properties.

- [ ] **Step 1: Rewrite globals.css**

```css
@import "tailwindcss";

@theme {
  --color-surface: #16111c;
  --color-surface-dim: #16111c;
  --color-surface-container-lowest: #100c16;
  --color-surface-container-low: #1e1a24;
  --color-surface-container: #221e28;
  --color-surface-container-high: #2d2833;
  --color-surface-container-highest: #38333e;
  --color-surface-bright: #3c3743;
  --color-on-surface: #e9dfee;
  --color-on-surface-variant: #cbc4cc;
  --color-primary: #d0bcff;
  --color-on-primary: #3c0091;
  --color-primary-container: #14003b;
  --color-secondary: #6bd8cb;
  --color-on-secondary: #003732;
  --color-outline: #948f96;
  --color-outline-variant: #49454c;
  --color-error: #ffb4ab;
  --font-family-headline: "Manrope", sans-serif;
  --font-family-body: "Inter", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-surface);
  color: var(--color-on-surface);
  font-family: var(--font-family-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: rgb(208 188 255 / 0.3);
  color: var(--color-primary);
}

.technical-gradient {
  background: linear-gradient(135deg, #d0bcff 0%, #14003b 100%);
}
```

- [ ] **Step 2: Verify Tailwind processes the new tokens**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx next build 2>&1 | tail -5
```

Expected: Build succeeds (may have warnings about missing pages, that's fine at this stage)

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "style: replace cosmic theme with Stitch design tokens"
```

---

## Task 3: Update layout.tsx with new fonts and shared structure

**Files:**
- Modify: `src/app/layout.tsx`

Replace Geist fonts with Manrope + Inter via `next/font/google`. Keep metadata. The layout will import Navbar and Footer once they exist (Task 4), so for now just set up fonts and body classes.

- [ ] **Step 1: Rewrite layout.tsx**

```tsx
import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tilak Kumar | Digital Architect",
  description:
    "Engineering high-performance distributed systems and ML pipelines with a focus on scale, security, and computational efficiency.",
  openGraph: {
    title: "Tilak Kumar | Digital Architect",
    description:
      "Engineering high-performance distributed systems and ML pipelines with a focus on scale, security, and computational efficiency.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tilak Kumar | Digital Architect",
    description:
      "Engineering high-performance distributed systems and ML pipelines with a focus on scale, security, and computational efficiency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update layout with Manrope + Inter fonts and new metadata"
```

---

## Task 4: Build shared components (Navbar, Footer, StatusBar)

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/StatusBar.tsx`
- Modify: `src/app/layout.tsx` (add Navbar + Footer imports)

Reference: All 3 Stitch HTML files share the same nav/footer structure. See `stitch-designs/html/experience-career.html` lines 88-104 (nav) and 246-261 (footer).

- [ ] **Step 1: Create Navbar.tsx**

Client component with:
- Fixed top, glass background: `bg-surface-container-low/50 backdrop-blur-xl`
- Left: "Tilak Kumar" in primary color, Manrope font
- Center: Home, Projects, Experience, Contact links — active state via `usePathname()` with `border-b-2 border-primary` on match
- Right: "View Resume" button (links to `/resume.pdf`)
- Mobile: hamburger menu toggling a slide-down nav
- Scroll behavior: hide on scroll down, show on scroll up (reuse pattern from old `Navbar.tsx`)
- Routes: Home → `/`, Projects → `/projects`, Experience → `/experience`, Contact → `/contact`

```tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface-container-low/50 backdrop-blur-xl shadow-[0_40px_40px_rgba(208,188,255,0.04)] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold text-primary tracking-tighter font-[family-name:var(--font-headline)]"
        >
          Tilak Kumar
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-headline)] font-bold tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 hover:scale-[1.02] active:scale-95 ${
                pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-outline hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold tracking-tight hover:scale-[1.02] active:scale-95 transition-all duration-300 text-sm"
          >
            View Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface-container-low/95 backdrop-blur-xl border-t border-outline-variant/20 px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block font-[family-name:var(--font-headline)] font-bold text-lg ${
                pathname === link.href ? "text-primary" : "text-outline"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Create Footer.tsx**

Server component — static content. Matches Stitch footer exactly.

```tsx
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
```

- [ ] **Step 3: Create StatusBar.tsx**

Floating bottom bar from the Projects page Stitch design. See `stitch-designs/html/projects-library.html` lines 223-248.

```tsx
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
```

- [ ] **Step 4: Add Navbar + Footer to layout.tsx**

Update the body in `layout.tsx` to include the shared components:

```tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ... (keep existing imports and metadata)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify the app loads with nav + footer**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx next dev &
sleep 3 && curl -s http://localhost:3000 | head -50
kill %1
```

Expected: HTML output containing "Tilak Kumar" nav and footer elements with the Stitch color classes.

- [ ] **Step 6: Commit**

```bash
git add src/components/Navbar.tsx src/components/Footer.tsx src/components/StatusBar.tsx src/app/layout.tsx
git commit -m "feat: add shared Navbar, Footer, and StatusBar components"
```

---

## Task 5: Update resume.ts data

**Files:**
- Modify: `src/data/resume.ts`

Update with richer content from resume PDF + Stitch designs. Remove PayUp. Add new projects. Add stats. Enrich Amour.

- [ ] **Step 1: Rewrite resume.ts**

```typescript
export const resumeData = {
  personalInfo: {
    name: "Tilak Kumar",
    role: "Senior Software Engineer",
    tagline: "The Digital Architect",
    location: "Bangalore, India",
    coordinates: "12.9716° N, 77.5946° E",
    email: "mailtotilak@icloud.com",
    phone: "+91-8660312110",
    github: "https://github.com/Quelaan1",
    linkedin: "https://linkedin.com/in/tilakkumarg",
    summary:
      "Engineering high-performance distributed systems and machine learning pipelines with a focus on scale, security, and computational efficiency.",
  },
  stats: {
    batchInserts: "100K+",
    efficiencyGain: "40%",
    microservicesBuilt: "68+",
    productionSystems: "3",
    backendTechnologies: "15+",
    yearsEngineering: "5+",
  },
  skills: {
    backend: [
      "Python",
      "Node.js (TypeScript)",
      "GoLang",
      "PostgreSQL",
      "ClickHouse",
      "StarRocks",
      "MongoDB",
      "Neo4j",
      "Redis",
      "DragonflyDB",
      "Kafka",
      "RabbitMQ",
      "REST",
      "gRPC",
      "WebSocket",
    ],
    frontend: [
      "TypeScript",
      "Jest",
      "TailwindCSS",
      "Redux Toolkit",
      "React Native",
      "Next.js",
      "React.js",
      "Figma",
    ],
    infrastructure: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "FluxCD",
      "Trivy",
      "GCP",
      "AWS",
      "Cloudflare",
      "SentenceTransformers",
      "Pinecone",
    ],
  },
  experience: [
    {
      company: "Avacend Inc",
      role: "Senior Software Engineer",
      subtitle: "Contract",
      period: "Dec 2024 - Present",
      periodShort: "2024 — Present",
      location: "Remote",
      tags: ["CLICKHOUSE", "GPT-4O", "ML PIPELINES"],
      sections: [
        {
          title: "Data Engineering at Scale",
          description:
            "Architecting high-throughput analytics engines using ClickHouse. Focused on real-time data ingestion and processing for large-scale enterprise monitoring.",
          stat: { value: "100K+", label: "batch inserts/sec" },
        },
        {
          title: "LLM & Intelligence",
          description:
            "Pioneered a proprietary text-to-SQL engine leveraging GPT-4o, enabling non-technical stakeholders to query multi-petabyte datasets via natural language.",
          stack: [
            "Distributed ML Pipelines",
            "OpenAI API Optimization",
            "Real-time Query Translation",
          ],
        },
      ],
      description: [
        "Built Python data pipelines with OAuth2-authenticated WorxHub API integration, automatic token refresh, and three-tier extraction strategy for incremental data synchronization",
        "Designed ClickHouse analytics schema with ReplacingMergeTree engine, 100K-row batch inserts across 8 parallel threads with exponential backoff retry logic",
        "Implemented text-to-SQL generation pipeline using GPT-4o converting natural language queries to ClickHouse SQL, with AI-powered result interpretation",
        "Built ML pipeline using SentenceTransformer embeddings, HDBSCAN clustering, and UMAP dimensionality reduction with Pinecone vector database integration",
        "Developed 4 production dashboards with 10+ KPIs including SLA compliance tracking and DragonflyDB caching with extraction-date-aware invalidation",
        "Architected multi-tenant FastAPI backend with three-tier RBAC, JWT authentication, and async ClickHouse operations",
      ],
    },
    {
      company: "Constient Global Solutions",
      role: "Founding Engineer",
      subtitle: "Senior Software Engineer",
      period: "Nov 2022 - Dec 2024",
      periodShort: "2022 — 2024",
      location: "",
      tags: ["GOLANG", "GRPC", "DISTRIBUTED SYSTEMS"],
      sections: [
        {
          title: "Core Infrastructure Design",
          description:
            "As a founding engineer, spearheaded the transition from monolithic architecture to high-performance GoLang microservices. Developed a custom distributed log management system processing millions of events daily.",
        },
      ],
      featureGrid: [
        { icon: "GitBranch", label: "gRPC Layers" },
        { icon: "Terminal", label: "Log Orchestration" },
        { icon: "Server", label: "Microservices" },
      ],
      description: [
        "Founding engineer of the startup project; designed and implemented scalable REST API backend microservices using GoLang",
        "Architected a distributed log management system using StarRocks DB and Kafka, improving troubleshooting efficiency by 40%",
        "Implemented high-performance gRPC communication protocols between services using Python and GoLang",
        "Created SDKs and integrated OpenAI APIs for advanced AI-driven backend features",
        "Managed deployment infrastructure using Docker and Kubernetes for microservices architecture",
        "Optimized database performance across PostgreSQL, ClickHouse, and StarRocks implementations",
        "Architected responsive front-end for the log management system using Next.js and TailwindCSS",
        "Established frontend testing practices using Jest, achieving 90% test coverage",
      ],
    },
  ],
  projects: [
    {
      title: "Amour - High-Trust Dating App",
      slug: "amour",
      type: "Flagship System",
      image: "/images/amour-mockup.jpg",
      icon: "/images/amour-icon.png",
      tech: [
        "React Native",
        "NestJS",
        "TypeScript",
        "gRPC",
        "Prisma",
        "RabbitMQ",
        "Redis",
        "Socket.io",
        "Kubernetes",
      ],
      summary:
        "A highly secure, microservices-based social infrastructure designed for ultra-low latency and verifiable user trust. Built to handle million-scale concurrent connections with gRPC efficiency.",
      highlights: [
        {
          label: "Microservices",
          detail:
            "16 gRPC proto services with hexagonal architecture across 68+ NestJS services",
        },
        {
          label: "Database",
          detail:
            "68-model Prisma schema with 141 BTREE indexes and denormalized chat caching for 50x faster rendering",
        },
        {
          label: "Auth",
          detail:
            "Dual strategy — GatewayHelper (10-30x faster) + SuperTokens with AES-256-GCM encryption",
        },
        {
          label: "Notifications",
          detail:
            "4-tier priority queuing with presence-aware routing and circuit breaker pattern across 16 RabbitMQ exchanges",
        },
        {
          label: "Real-time",
          detail:
            "Horizontally-scalable WebSocket gateway with Redis pub/sub and Agora RTM messaging",
        },
        {
          label: "DevOps",
          detail:
            "FluxCD GitOps pipeline with multi-arch Docker builds, Kubernetes rolling updates, and Trivy scanning",
        },
      ],
      sidebar: {
        title: "NestJS Microservices",
        description:
          "Modular architecture utilizing independent services for Auth, Matching, and Messaging, orchestrated via containerization for elastic scaling.",
      },
      detailCards: [
        { label: "Transport", value: "gRPC Protocol" },
        { label: "Queueing", value: "4-Tier Priority" },
      ],
      link: "#",
    },
    {
      title: "Distributed Log Management",
      slug: "log-management",
      type: "Production System",
      tech: ["StarRocks", "Kafka", "Kubernetes"],
      summary:
        "High-volume telemetry ingestion system utilizing StarRocks for real-time analytics and Kafka as the resilient message backbone.",
      stat: { value: "40%", label: "Efficiency Gain" },
      link: "#",
    },
    {
      title: "ML Pattern Analysis",
      slug: "ml-analysis",
      type: "Production System",
      tech: ["PyTorch", "Pinecone", "FastAPI"],
      summary:
        "Neural search engine leveraging SentenceTransformers for semantic embedding and Pinecone for high-dimensional vector storage.",
      link: "#",
    },
  ],
  education: {
    institution: "Dayananda Sagar Institution",
    degree: "Diploma in Computer Science",
    description:
      "Focused on Systems Architecture and Computational Logic. Graduated with high honors in Core Programming.",
  },
};
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx tsc --noEmit 2>&1 | head -20
```

Expected: No errors from `resume.ts` (may show errors from missing page components, that's expected)

- [ ] **Step 3: Commit**

```bash
git add src/data/resume.ts
git commit -m "feat: update resume data with richer content, new projects, stats"
```

---

## Task 6: Build Home page (Hero + BentoGrid)

**Files:**
- Create: `src/components/home/Hero.tsx`
- Create: `src/components/home/BentoGrid.tsx`
- Modify: `src/app/page.tsx`

Reference: Home page wireframe from brainstorming session. Combines elements from all 3 Stitch screens into a bento grid.

- [ ] **Step 1: Create Hero.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <span className="text-secondary font-[family-name:var(--font-body)] tracking-[0.2em] text-xs font-bold uppercase flex items-center gap-2">
          <span className="w-8 h-[1px] bg-secondary" />
          {resumeData.personalInfo.tagline}
        </span>
        <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[0.95]">
          Architecting Resilient{" "}
          <br />
          <span className="text-primary">Digital Ecosystems.</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg mt-4 leading-relaxed">
          {resumeData.personalInfo.summary}
        </p>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <Link
            href="/projects"
            className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold tracking-tight hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            className="border border-outline-variant text-primary px-8 py-3 rounded-xl font-bold tracking-tight hover:scale-[1.02] active:scale-95 hover:bg-primary/5 transition-all duration-300"
          >
            Download Resume
          </a>
          <div className="flex items-center gap-3 ml-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
            </span>
            <span className="text-secondary text-sm font-medium tracking-wide">
              Open for Innovation
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Create BentoGrid.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { resumeData } from "@/data/resume";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BentoGrid() {
  const flagship = resumeData.projects[0];
  const secondaryProjects = resumeData.projects.slice(1);
  const { stats } = resumeData;

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-7xl mx-auto px-6 md:px-8 space-y-3"
    >
      {/* Row 1: Flagship + Stats */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-3">
        {/* Flagship Project Card */}
        <motion.div
          variants={item}
          className="bg-surface-container-low rounded-[2rem] p-8 md:p-10 relative overflow-hidden md:row-span-2 group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 technical-gradient opacity-10 blur-[80px]" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-xs font-bold rounded-full tracking-wider border border-outline-variant/20 uppercase">
                {flagship.type}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-bold mb-4 text-on-surface">
              {flagship.title}
            </h2>
            <p className="text-on-surface-variant text-base mb-6 max-w-lg leading-relaxed">
              {flagship.summary}
            </p>
            {flagship.image && (
              <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 border border-outline-variant/10">
                <Image
                  src={flagship.image}
                  alt={flagship.title}
                  fill
                  className="object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent" />
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {flagship.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stat Cards */}
        <motion.div
          variants={item}
          className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-center"
        >
          <div className="text-secondary text-4xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter">
            {stats.batchInserts}
          </div>
          <div className="text-outline text-xs font-bold uppercase tracking-widest mt-1">
            batch inserts/sec
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-center"
        >
          <div className="text-secondary text-4xl font-extrabold font-[family-name:var(--font-headline)] tracking-tighter">
            {stats.efficiencyGain}
          </div>
          <div className="text-outline text-xs font-bold uppercase tracking-widest mt-1">
            efficiency gain
          </div>
        </motion.div>
      </div>

      {/* Row 2: Secondary Projects */}
      <div className="grid md:grid-cols-2 gap-3">
        {secondaryProjects.map((project) => (
          <motion.div
            key={project.slug}
            variants={item}
            className="bg-surface-container-low rounded-[2rem] p-8 group hover:bg-surface-container-high transition-all duration-500"
          >
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Project
            </div>
            <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold mb-2 text-on-surface">
              {project.title}
            </h3>
            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Row 3: Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-3">
        <motion.div variants={item}>
          <Link
            href="/experience"
            className="block bg-surface-container-low rounded-[2rem] p-8 border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-300 group"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="text-secondary text-xs uppercase tracking-widest font-semibold mb-2">
                  Experience
                </div>
                <div className="text-on-surface text-xl font-bold font-[family-name:var(--font-headline)]">
                  Career Timeline
                </div>
                <div className="text-on-surface-variant text-sm mt-1">
                  Avacend · Constient · 2022–Present
                </div>
              </div>
              <span className="text-primary text-2xl group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link
            href="/contact"
            className="block bg-gradient-to-br from-primary/5 to-primary-container/15 rounded-[2rem] p-8 border border-primary/15 text-center hover:from-primary/10 hover:to-primary-container/20 transition-all duration-300"
          >
            <div className="text-on-surface text-xl font-bold font-[family-name:var(--font-headline)] mb-2">
              Let&apos;s Build Together
            </div>
            <div className="text-primary text-sm font-medium">
              Open for Innovation →
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Row 4: Tech Breadth Strip */}
      <motion.div
        variants={item}
        className="bg-surface-container-low rounded-[2rem] py-6 px-8 flex justify-center gap-8 md:gap-16 flex-wrap"
      >
        {[
          { value: stats.backendTechnologies, label: "Backend Technologies" },
          { value: stats.yearsEngineering, label: "Years Engineering" },
          { value: stats.microservicesBuilt, label: "Microservices Built" },
          { value: stats.productionSystems, label: "Production Systems" },
        ].map((stat, i, arr) => (
          <div key={stat.label} className="flex items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-primary text-2xl font-extrabold font-[family-name:var(--font-headline)]">
                {stat.value}
              </div>
              <div className="text-outline text-[10px] uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
            {i < arr.length - 1 && (
              <div className="w-[1px] h-8 bg-outline-variant hidden md:block" />
            )}
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
```

- [ ] **Step 3: Update page.tsx**

```tsx
import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import StatusBar from "@/components/StatusBar";

export default function Home() {
  return (
    <main className="pt-32 pb-24">
      <Hero />
      <BentoGrid />
      <StatusBar />
    </main>
  );
}
```

- [ ] **Step 4: Verify the home page renders**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx next dev &
sleep 3 && curl -s http://localhost:3000 | grep -o "Digital Ecosystems" | head -1
kill %1
```

Expected: "Digital Ecosystems" found in the output

- [ ] **Step 5: Commit**

```bash
git add src/components/home/ src/app/page.tsx
git commit -m "feat: build Home page with Hero and BentoGrid components"
```

---

## Task 7: Build Experience page

**Files:**
- Create: `src/components/experience/TimelineEntry.tsx`
- Create: `src/components/experience/AcademicsTrust.tsx`
- Create: `src/app/experience/page.tsx`

Reference: `stitch-designs/html/experience-career.html` — replicate exactly.

- [ ] **Step 1: Create TimelineEntry.tsx**

Reusable component for each experience block. Sticky left panel + right content.

```tsx
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
      {/* Sticky Left Panel */}
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
          {subtitle && (
            <span className="text-outline"> · {subtitle}</span>
          )}
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

      {/* Right Content */}
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
```

- [ ] **Step 2: Create AcademicsTrust.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, BadgeCheck, Lightbulb } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function AcademicsTrust() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="pt-12 border-t border-outline-variant/20"
    >
      <h2 className="font-[family-name:var(--font-headline)] text-3xl font-extrabold tracking-tight mb-12">
        Academics &amp; Trust
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Diploma */}
        <div className="bg-surface-container-high p-8 rounded-2xl group transition-all hover:bg-surface-container-highest">
          <GraduationCap className="text-primary mb-6" size={36} />
          <h3 className="text-xl font-bold mb-2">
            {resumeData.education.degree.replace("Diploma in ", "Diploma in ")}
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {resumeData.education.description}
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-surface-container-high p-8 rounded-2xl group transition-all hover:bg-surface-container-highest">
          <BadgeCheck className="text-secondary mb-6" size={36} />
          <h3 className="text-xl font-bold mb-2">Industry Certifications</h3>
          <div className="space-y-2 mt-4">
            <div className="flex justify-between items-center text-xs font-bold tracking-widest uppercase text-on-surface-variant">
              <span>Cloud Computing</span>
              <span className="text-secondary">PRO</span>
            </div>
            <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-full" />
            </div>
          </div>
        </div>

        {/* Open for Innovation */}
        <div className="bg-surface-container-high p-8 rounded-2xl border-2 border-primary/20 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full technical-gradient flex items-center justify-center mb-6">
            <Lightbulb className="text-white" size={28} />
          </div>
          <h3 className="text-xl font-bold mb-2">Open for Innovation</h3>
          <p className="text-on-surface-variant text-sm">
            Actively seeking strategic technical partnerships and breakthrough
            projects.
          </p>
          <Link
            href="/contact"
            className="mt-6 text-primary font-bold text-sm tracking-widest uppercase hover:underline"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 3: Create experience page.tsx**

```tsx
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
      {/* Hero */}
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

      {/* Timeline */}
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
```

- [ ] **Step 4: Verify the experience page renders**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx next dev &
sleep 3 && curl -s http://localhost:3000/experience | grep -o "Production" | head -1
kill %1
```

Expected: "Production" found in output

- [ ] **Step 5: Commit**

```bash
git add src/components/experience/ src/app/experience/
git commit -m "feat: build Experience page with timeline and academics sections"
```

---

## Task 8: Build Projects page

**Files:**
- Create: `src/components/projects/FlagshipProject.tsx`
- Create: `src/components/projects/ProjectCard.tsx`
- Create: `src/components/projects/CollabCTA.tsx`
- Create: `src/app/projects/page.tsx`

Reference: `stitch-designs/html/projects-library.html` — replicate exactly.

- [ ] **Step 1: Create FlagshipProject.tsx**

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/data/resume";

export default function FlagshipProject() {
  const project = resumeData.projects[0];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <div className="grid md:grid-cols-12 gap-8 items-stretch">
        {/* Main Card */}
        <div className="md:col-span-7 bg-surface-container-low rounded-[2rem] overflow-hidden flex flex-col justify-between p-10 relative group">
          <div className="absolute top-0 right-0 w-64 h-64 technical-gradient opacity-10 blur-[80px]" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-12">
              <span className="px-4 py-1.5 bg-surface-container-highest text-secondary text-xs font-bold rounded-full tracking-wider border border-outline-variant/20 uppercase">
                {project.type}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-6 text-on-surface">
              {project.title}
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              {project.summary}
            </p>
            {project.detailCards && (
              <div className="grid grid-cols-2 gap-6">
                {project.detailCards.map((card) => (
                  <div
                    key={card.label}
                    className="p-4 bg-surface-container-high rounded-xl"
                  >
                    <span className="text-primary text-xs font-bold uppercase block mb-2">
                      {card.label}
                    </span>
                    <span className="text-on-surface font-medium">
                      {card.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-5 flex flex-col gap-8">
          {project.sidebar && (
            <div className="flex-1 bg-surface-container-high p-8 rounded-[2rem] border border-outline-variant/10">
              <h3 className="font-[family-name:var(--font-headline)] text-xl font-bold mb-4 flex items-center gap-3">
                {project.sidebar.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {project.sidebar.description}
              </p>
            </div>
          )}
          {project.image && (
            <div className="flex-1 overflow-hidden rounded-[2rem] min-h-[250px] relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent" />
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
```

- [ ] **Step 2: Create ProjectCard.tsx**

```tsx
"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  summary: string;
  tech: string[];
  stat?: { value: string; label: string };
}

export default function ProjectCard({
  title,
  summary,
  tech,
  stat,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface-container-low p-10 rounded-[2rem] group hover:bg-surface-container-high transition-all duration-500"
    >
      {stat && (
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <svg
              className="text-primary"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <div className="text-right">
            <span className="text-secondary text-2xl font-bold font-[family-name:var(--font-headline)] tracking-tighter">
              {stat.value}
            </span>
            <span className="text-on-surface-variant text-[10px] block uppercase tracking-widest">
              {stat.label}
            </span>
          </div>
        </div>
      )}
      <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-4 text-on-surface">
        {title}
      </h3>
      <p className="text-on-surface-variant mb-8 leading-relaxed">{summary}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs rounded-lg"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 3: Create CollabCTA.tsx**

```tsx
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
```

- [ ] **Step 4: Create projects page.tsx**

```tsx
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
      {/* Hero */}
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

      {/* Flagship Project */}
      <FlagshipProject />

      {/* Secondary Projects Grid */}
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

      {/* CTA */}
      <CollabCTA />
      <StatusBar />
    </main>
  );
}
```

- [ ] **Step 5: Verify the projects page renders**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx next dev &
sleep 3 && curl -s http://localhost:3000/projects | grep -o "Digital Ecosystems" | head -1
kill %1
```

Expected: "Digital Ecosystems" found in output

- [ ] **Step 6: Commit**

```bash
git add src/components/projects/ src/app/projects/
git commit -m "feat: build Projects page with flagship showcase and bento grid"
```

---

## Task 9: Build Contact page

**Files:**
- Create: `src/components/contact/ContactForm.tsx`
- Create: `src/components/contact/Dossier.tsx`
- Create: `src/components/contact/MapSection.tsx`
- Create: `src/app/contact/page.tsx`

Reference: `stitch-designs/html/contact-resume.html` — replicate exactly.

Map image URL (extracted from Stitch HTML): `https://lh3.googleusercontent.com/aida-public/AB6AXuBbkhxR5f1nksiv2aHvWJuHLiIvBn3shuG-mLKSmkGKVpr63vosXl4S59Gsu5uF9Mr1FBKU0xX2UmsWkJQGwkSaXicefbtkQTC139sBtAWNwzNLoKJkl43R6WpWGzjkTLmOaF6fYpO0xaEQhWbLyKHBuaiDHp5gT86T0TLkBcUa6pc_KhyhMaxbf6ubm2zAKvhGecQhLz5lcKDHp8NZhF1dO1VLw8PopXTABm1DgV0HuUeX7756u8eDgdHKsE1IbpE2KWMEZi8eCDQ`

- [ ] **Step 1: Create ContactForm.tsx**

Web3Forms integration. The user will need to set their access key. Use a placeholder that is clearly marked.

```tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface-container-low rounded-xl p-12 text-center">
        <div className="text-secondary text-4xl mb-4">✓</div>
        <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-2">
          Transmission Received
        </h3>
        <p className="text-on-surface-variant">
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12 relative">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10 transform translate-x-1/4 translate-y-1/4" />
      <h3 className="font-[family-name:var(--font-headline)] text-3xl font-bold mb-10">
        Quick Inquiry
      </h3>
      <form onSubmit={handleSubmit} className="space-y-8">
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface placeholder:text-outline/50"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface placeholder:text-outline/50"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
            Subject
          </label>
          <select
            name="subject"
            className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface"
          >
            <option>System Architecture Consultation</option>
            <option>Product Development Inquiry</option>
            <option>Technical Partnership</option>
            <option>Other / General Reach Out</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-widest uppercase text-on-surface-variant ml-1">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Describe the scope of your inquiry..."
            className="w-full bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/40 text-on-surface placeholder:text-outline/50 resize-none"
          />
        </div>
        <button
          type="submit"
          className="technical-gradient text-on-primary w-full py-5 rounded-lg font-bold text-lg tracking-tight hover:shadow-[0_0_30px_rgba(208,188,255,0.2)] transition-all"
        >
          Initiate Transmission
        </button>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: Create Dossier.tsx**

```tsx
import { Download, Mail, MapPin, Terminal, Globe } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Dossier() {
  const { personalInfo } = resumeData;

  return (
    <div className="lg:col-span-5 space-y-16">
      {/* Professional Dossier */}
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

      {/* Direct Channels */}
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

      {/* Social Graph */}
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
```

- [ ] **Step 3: Create MapSection.tsx**

```tsx
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
      {/* Map Image */}
      <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover"
          alt="Stylized dark minimalist map of Bangalore India"
          src={MAP_IMAGE_URL}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />

      {/* Coordinate Card */}
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

      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 animate-pulse shadow-[0_0_15px_rgba(208,188,255,0.5)]" />
    </motion.div>
  );
}
```

- [ ] **Step 4: Create contact page.tsx**

```tsx
import ContactForm from "@/components/contact/ContactForm";
import Dossier from "@/components/contact/Dossier";
import MapSection from "@/components/contact/MapSection";

export const metadata = {
  title: "Contact | Tilak Kumar",
  description: "Let's build the next generation — get in touch.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero */}
      <header className="mb-20">
        <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Let&apos;s Build the{" "}
          <span className="text-primary">Next Generation</span>
        </h1>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary text-sm tracking-widest uppercase font-medium">
            System Status: Accepting New Ventures
          </span>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <Dossier />
        <ContactForm />
      </div>

      {/* Map */}
      <MapSection />
    </main>
  );
}
```

- [ ] **Step 5: Verify the contact page renders**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx next dev &
sleep 3 && curl -s http://localhost:3000/contact | grep -o "Next Generation" | head -1
kill %1
```

Expected: "Next Generation" found in output

- [ ] **Step 6: Commit**

```bash
git add src/components/contact/ src/app/contact/
git commit -m "feat: build Contact page with Web3Forms, dossier, and map"
```

---

## Task 10: Configure next.config.ts for external images

**Files:**
- Modify: `next.config.ts`

The map image and server infrastructure image are hosted on `lh3.googleusercontent.com`. Next.js Image optimization needs this domain whitelisted. The map uses a regular `<img>` tag so this is only needed if we later optimize it, but the Amour mockup in `public/` doesn't need it. Still, add it for future-proofing.

- [ ] **Step 1: Update next.config.ts**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },
};

export default nextConfig;
```

- [ ] **Step 2: Commit**

```bash
git add next.config.ts
git commit -m "chore: allow Google hosted images in Next.js config"
```

---

## Task 11: Final verification and polish

**Files:**
- Possibly modify any file with issues found during verification

- [ ] **Step 1: Run full build**

```bash
cd /Users/tilak/Work/Portfolio/my-portfolio && npx next build 2>&1
```

Expected: Build succeeds with no errors. Warnings are acceptable.

- [ ] **Step 2: Start production server and verify all pages**

```bash
npx next start &
sleep 2
echo "--- Home ---" && curl -s http://localhost:3000 | grep -c "Digital Ecosystems"
echo "--- Projects ---" && curl -s http://localhost:3000/projects | grep -c "Flagship"
echo "--- Experience ---" && curl -s http://localhost:3000/experience | grep -c "Production"
echo "--- Contact ---" && curl -s http://localhost:3000/contact | grep -c "Next Generation"
kill %1
```

Expected: Each page returns count of 1 or more for its unique content.

- [ ] **Step 3: Fix any build errors or rendering issues found**

Address any TypeScript errors, missing imports, or styling issues discovered during the build.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "fix: resolve build issues and polish final output"
```

Only create this commit if there were actual fixes needed. Skip if build was clean.

- [ ] **Step 5: Add .superpowers to .gitignore**

```bash
echo ".superpowers/" >> .gitignore
git add .gitignore
git commit -m "chore: add .superpowers to gitignore"
```
