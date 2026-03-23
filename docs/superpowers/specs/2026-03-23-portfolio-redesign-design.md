# Portfolio Redesign — Stitch Theme

## Overview

Redesign the portfolio from a single-page cosmic-themed site to a multi-page portfolio using the Stitch design system. Four pages: Home (new bento layout), Projects, Experience, and Contact — each with distinct hero sections and content.

## Decisions

- **Multi-page routing**: `/`, `/projects`, `/experience`, `/contact`
- **Home page**: Combined landing with bento grid (not one of the 3 Stitch screens)
- **Component structure**: Clean slate — delete `themes/cosmic/`, flat component structure
- **Skills section**: Removed as standalone; skills appear as contextual tags on projects/experience
- **Projects**: Amour (flagship), Distributed Log Management, ML Pattern Analysis. PayUp removed.
- **Contact form**: Web3Forms (free, unlimited submissions)
- **Data layer**: Updated `resume.ts` with richer content from resume PDF + Stitch designs

## Design System

### Colors (Material Design 3 tokens)

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#16111c` | Page backgrounds |
| `surface-container-low` | `#1e1a24` | Card backgrounds, footer |
| `surface-container-high` | `#2d2833` | Elevated cards, nav bg |
| `surface-container-highest` | `#38333e` | Tags, badges, form inputs |
| `on-surface` | `#e9dfee` | Primary text |
| `on-surface-variant` | `#cbc4cc` | Secondary text |
| `primary` | `#d0bcff` | Purple accents, active links, headings |
| `on-primary` | `#3c0091` | Text on primary-colored buttons |
| `secondary` | `#6bd8cb` | Teal accents, status indicators, labels |
| `outline` | `#948f96` | Muted/inactive text |
| `outline-variant` | `#49454c` | Borders, dividers |
| `primary-container` | `#14003b` | Gradient endpoint |

### Typography

- **Headlines**: Manrope (700, 800) — tight letter-spacing (`tracking-tighter`)
- **Body/Labels**: Inter (400, 500, 600)
- Load via Google Fonts

### Shared Visual Patterns

- **Glass nav**: `bg-surface-container-low/50 backdrop-blur-xl`, shadow with purple tint
- **Technical gradient**: `linear-gradient(135deg, #d0bcff 0%, #14003b 100%)`
- **Status indicator**: Pulsing teal dot + "System Status: Active" text
- **Card radius**: `rounded-[2rem]` for large cards, `rounded-xl` for smaller elements
- **Hover transitions**: `transition-all duration-300`, scale `hover:scale-[1.02]`

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, Navbar + Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Stitch design tokens + base styles
│   ├── projects/
│   │   └── page.tsx            # Projects Library
│   ├── experience/
│   │   └── page.tsx            # Experience & Career
│   └── contact/
│       └── page.tsx            # Contact & Resume
├── components/
│   ├── Navbar.tsx              # Shared nav with usePathname() active state
│   ├── Footer.tsx              # Shared footer
│   ├── StatusBar.tsx           # Floating system status bar
│   ├── home/
│   │   ├── Hero.tsx            # Home hero with subtitle + headline + CTAs
│   │   └── BentoGrid.tsx      # Flagship, stats, projects, nav cards, tech strip
│   ├── projects/
│   │   ├── FlagshipProject.tsx # Amour large showcase card with image
│   │   ├── ProjectCard.tsx     # Reusable bento project card
│   │   └── CollabCTA.tsx       # "Interested in technical collaboration?" section
│   ├── experience/
│   │   ├── TimelineEntry.tsx   # Sticky-left label + right content block
│   │   └── AcademicsTrust.tsx  # Education, certs, open for innovation cards
│   └── contact/
│       ├── ContactForm.tsx     # Web3Forms inquiry form
│       ├── Dossier.tsx         # Resume download + direct channels + social
│       └── MapSection.tsx      # Bangalore geographic visualization
└── data/
    └── resume.ts               # Updated with richer content
```

## Pages

### Home (`/`)

**Hero Section:**
- Subtitle: "THE DIGITAL ARCHITECT" (teal, uppercase, letter-spaced)
- Headline: "Architecting Resilient **Digital Ecosystems.**" (primary color on second line)
- Description paragraph
- CTA buttons: "View Projects" (solid primary) + "Download Resume" (outline)
- Status badge: pulsing teal dot + "Open for Innovation"

**Bento Grid:**
- **Row 1** (2fr 1fr, flagship spans 2 rows):
  - Flagship Amour card: badge, title, description, mockup image (from Amour website project `hero-profile.jpg`), tech tags. Note: this is a **compact inline version** inside `BentoGrid.tsx`, NOT a reuse of `FlagshipProject.tsx` (which is the full-width showcase on `/projects`)
  - Stat card: "100K+" batch inserts/sec
  - Stat card: "40%" efficiency gain
- **Row 2** (1fr 1fr): Distributed Log Management + ML Pattern Analysis preview cards
- **Row 3** (1fr 1fr): Experience nav card (→ /experience) + Contact CTA card (→ /contact)
- **Row 4** (full width): Tech breadth strip — "15+ Backend Technologies · 5+ Years · 68+ Microservices · 3 Production Systems"

### Projects (`/projects`)

Matches Stitch screen "Projects Library" exactly:
- Hero: "Architecting Resilient **Digital Ecosystems.**" + description
- Flagship section: Amour card (7-col) with badge, description, tech details + sidebar with NestJS info card + server infrastructure image
- Bento grid (2-col): Distributed Log Management (40% efficiency stat) + ML Pattern Analysis
- Collab CTA: "Interested in technical collaboration?" + "Initiate Connection" button
- Floating StatusBar at bottom

### Experience (`/experience`)

Matches Stitch screen "Experience & Career" exactly:
- Hero: "Architecting **Production** Logic." + system status badge
- Timeline block 1 (2022–Present): Avacend Inc, Senior Software Engineer
  - Sticky left: dates, role, tech tags (CLICKHOUSE, GPT-4O, ML PIPELINES)
  - Right: 2-col grid — "Data Engineering at Scale" + "LLM & Intelligence" sections
- Timeline block 2 (2019–2022): Constient Global Solutions, Founding Engineer
  - Sticky left: dates, role, tech tags (GOLANG, GRPC, DISTRIBUTED SYSTEMS)
  - Right: "Core Infrastructure Design" + feature grid (gRPC Layers, Log Orchestration, Microservices)
- Academics & Trust: 3-col grid — Diploma in CS, Industry Certifications (progress bar), Open for Innovation CTA

### Contact (`/contact`)

Matches Stitch screen "Contact & Resume" exactly:
- Hero: "Let's Build the **Next Generation**" + status badge
- 2-column layout (5-col + 7-col):
  - Left: Professional Dossier (resume download), Direct Channels (email, location), Social Graph (GitHub, LinkedIn icons)
  - Right: Quick Inquiry form via Web3Forms — fields: Full Name, Email, Subject (select), Message (textarea), "Initiate Transmission" submit
- Geographic visualization: Bangalore map image with coordinate overlay card + scanning line animation

## Data Updates (`resume.ts`)

### Changes from current:
1. **Remove PayUp** project entirely
2. **Add** Distributed Log Management project (StarRocks, Kafka, Kubernetes — 40% efficiency gain)
3. **Add** ML Pattern Analysis project (PyTorch, Pinecone, FastAPI — SentenceTransformers, semantic embedding)
4. **Enrich Amour** project with full resume details (68-model schema, 4-tier queuing, hexagonal architecture, etc.)
5. **Update Constient role** to include "Founding Engineer" subtitle
6. **Update personal summary** to match Stitch hero copy
7. **Add education details**: "Focused on Systems Architecture and Computational Logic"
8. **Add stats field**: batch inserts (100K+), efficiency gain (40%), microservices count (68+), production systems (3)

## Assets

### From Stitch designs (already downloaded):
- `stitch-designs/screenshots/` — 3 page screenshots for reference
- `stitch-designs/html/` — 3 HTML files for exact markup reference

### From Amour website project:
- Copy `hero-profile.jpg` (500×600, 31KB) to `public/images/amour-mockup.jpg` for the flagship project card
- Copy `amour-icon.png` (1024×1024) to `public/images/amour-icon.png` for project avatar

### Map image:
- Use the Stitch-provided Bangalore map image URL for the Contact page geographic section

## Animations

Keep Framer Motion for:
- Viewport-triggered entrance animations (`whileInView`, `fadeIn + slideUp`)
- Staggered children in bento grid
- Nav hide/show on scroll direction
- Pulsing status indicator (CSS `animate-ping` from Stitch)
- Floating status bar entrance

## Responsive Behavior

- **Desktop (md+)**: Full grid layouts as designed
- **Mobile**: Single column stack, nav collapses to hamburger menu, bento cards stack vertically, timeline loses sticky positioning
- Breakpoint: `md:` (768px) — consistent with Stitch designs

## Dependencies

- No new npm packages required
- Web3Forms: client-side only, no package needed (just a form `action` URL or `fetch` call)
- Fonts: Google Fonts CDN (Manrope + Inter) — replace Geist fonts
- Icons: Keep `lucide-react` or switch to Material Symbols (Stitch uses Material Symbols) — recommend **keeping lucide-react** since it's already installed and provides the same icons

## What Gets Deleted

- `src/components/Portfolio.tsx`
- `src/components/themes/cosmic/` (entire directory — Navbar, Hero, Experience, Skills, Projects, Contact)
- Old cosmic CSS classes from `globals.css` (`.cosmic-bg`, `.glass-card`, `.text-glow`)
- Geist font imports from `layout.tsx`
