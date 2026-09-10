---
theme: Liminal Horizon
style: Editorial Brutalism softened by Atmospheric Minimalism
current_phase: All Stages Completed (1-4)
status: Stages 1, 2, 3 & 4 Fully Implemented & Polished
---

# Portfolio Development Phases

This project follows a strict staged implementation process. No stage should begin or transition to the next without explicit confirmation from the user.

---

## Stage 1: Page Structure Only (Scaffold)
- **Objective:** Create the semantic React page scaffold (`src/App.jsx` or similar) strictly following the section order specified in `prd.md`.
- **Allowed Elements:** Standard JSX semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<h1>`-`<h6>`, `<p>`, `<div>`, `<ul>`, `<li>`) and placeholder blocks.
- **Strict Constraints:**
  - **NO styling** (no CSS files loaded, no inline `style={{}}` attributes, no styled components, no design classes).
  - **NO components** (no buttons, no complex cards, no navbars, no icons, no interactive sub-components or libraries).
  - **Scaffold only** with placeholder markers (e.g., `[Hero / Details Placeholder]`, `[Project Card Placeholder]`).
- **Section Order (from PRD):**
  1. Profile Details & Header (Hero)
  2. Projects
  3. Skills & Certifications
  4. Experience & Education
  5. Contact
- **Exit Criteria:** HTML file structure verified, semantic order checked, and user confirmation received before proceeding to Stage 2.

---

## Stage 2: Visual Design System
- **Objective:** Apply the design system, colors, typography, spacing, and hierarchy defined in `DESIGN.md` (Theme: *Liminal Horizon*) to the React application using Vanilla CSS (`index.css`).
- **Allowed Tasks:**
  - Implement CSS design tokens (custom properties) in `index.css` for colors, spacing, typography scales, and border radii.
  - Import and configure the specified typography: **Space Grotesk** (Headings), **Newsreader** (Narrative/Editorial), and **JetBrains Mono** (Technical labels/metadata).
  - Establish layout grid (12-column desktop, 8-column tablet, 4-column mobile) and spacing rhythm (`space-2xs` to `space-5xl`).
  - Apply borders, subtle film-grain texture, and atmospheric planar layering.
- **Strict Constraints:**
  - **DO NOT add content** (keep the placeholders from Stage 1).
  - **DO NOT add new components** outside what is styled on the scaffold.
  - Strictly adhere to the monochromatic slate/stone palette (`#fbf9f9`, `#1b1c1c`, `#5c5c5c`, `#747878`). No neon or skeuomorphic embellishments.
- **Exit Criteria:** Complete visual design verification across breakpoints; user confirmation received before proceeding to Stage 3.

---

## Stage 3: Real Content Integration
- **Objective:** Replace all placeholder blocks with the verified biographical and technical data extracted from `Profile.pdf`.
- **Data Source:** Exclusively `Profile.pdf` (Vinay Sharma's verified profile).
- **Strict Constraints:**
  - **Use ONLY content from `Profile.pdf`.**
  - **Zero filler text:** Absolutely no Lorem Ipsum, no guessed projects, no invented stats.
  - **Missing Data Protocol:** If content for a section is missing from `Profile.pdf` (e.g., specific portfolio Projects are not listed in the PDF), **leave that section empty** and explicitly report what is missing to the user. Do not fill the gap.
- **Exit Criteria:** Accurate, authentic content populated; list of missing fields communicated to user; user confirmation received.

---

## Stage 4: Verification, Responsive Polish & Quality Assurance
- **Objective:** Perform end-to-end audit of the fully populated portfolio.
- **Tasks:**
  - Audit semantic markup, accessibility (ARIA, heading levels), and SEO tags.
  - Validate responsive behavior across mobile (375px), tablet (768px), and desktop (1240px+).
  - Ensure zero console errors, clean typography rendering, and fast loading performance.
- **Exit Criteria:** Fully functional, pixel-perfect portfolio aligned with `DESIGN.md`, `prd.md`, and user specifications.
