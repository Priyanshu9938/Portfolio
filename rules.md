---
theme: Liminal Horizon
style: Editorial Brutalism softened by Atmospheric Minimalism
colors:
  surface: '#fbf9f9'
  on-surface: '#1b1c1c'
  primary: '#5c5c5c'
  outline: '#747878'
---

# Project Guidelines & Rules

## Build rules
1. **Strict Staged Execution:** Do not begin implementation or move between stages without explicit user confirmation.
2. **Stage 1 (Scaffold):** HTML headings and placeholder blocks only. Absolutely no CSS, no inline styles, and no UI components.
3. **Stage 2 (Visual Design):** Apply colors, typography, spacing, and hierarchy strictly according to `DESIGN.md`. Do not add new content or components.
4. **Stage 3 (Real Content):** Use exclusively the data present in `Profile.pdf`. If any section data is missing (such as portfolio Projects), leave the section empty, do not write filler/placeholder text, and alert the user.
5. **No Hallucinations / Filler:** Never generate mock projects, fabricated statistics, or generic placeholder texts when real content is requested.

## Context
- **Target Individual:** Priyanshu Sahoo
  - BTech AI/ML '28 at GIET University Gunupur
  - Technical problem solver combining C/C++ with market & financial analysis
  - Active analytical focus bridging computer science, product marketing, and consumer behavior
- **Purpose:** Present Priyanshu Sahoo's profile, academic foundation, analytical interests, and skills to recruiters, interviewers, and technical visitors.

## Design
- **Theme:** Liminal Horizon
- **Aesthetic Movement:** Editorial Brutalism softened by Atmospheric Minimalism.
- **Palette:** Light base with monochromatic stone and slate undertones (`#fbf9f9` background, `#1b1c1c` high contrast text, `#5c5c5c` primary accents, `#747878` outlines).
- **Typography:**
  - Headings: `Space Grotesk` (Geometric, crisp, architectural framing)
  - Body & Editorial: `Newsreader` (Literary, warm, academic essay feel)
  - Metadata, Badges & Numbers: `JetBrains Mono` (High-density technical precision)
- **Visual Depth & Shapes:**
  - Tight `0.25rem` (4px) border radius for cards, containers, and inputs.
  - Razor-thin 1px subtle outlines (`#c4c7c7` / `#747878`).
  - Subtle analog film grain texture across view layers; avoid synthetic drop shadows or glowing neon gradients.

## Responsive behaviour
- **Desktop (1024px+):** 12-column asymmetric grid, 2rem (`32px`) gutters, maximum content width 1240px, maximum prose width 680px, section separation `space-4xl` / `space-5xl`.
- **Tablet (768px - 1023px):** 8-column layout, 1.5rem (`24px`) gutters.
- **Mobile (320px - 767px):** 4-column flow, 1rem (`16px`) gutters, responsive fluid typography scaling down gracefully.

## Development(tech Stack)
- **Framework:** React (Vite + React) for high-performance component architecture.
- **Structure:** Semantic HTML5 inside React (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Styling:** Vanilla CSS / CSS modules using CSS Custom Properties (tokens matching `DESIGN.md`). Avoid utility frameworks like TailwindCSS unless explicitly requested.
- **Typography Delivery:** Google Fonts (`Space Grotesk`, `Newsreader`, `JetBrains Mono`).
- **Build & Dev Tooling:** Vite for ultra-fast HMR and bundling.