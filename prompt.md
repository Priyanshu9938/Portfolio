---
theme: Liminal Horizon
style: Editorial Brutalism softened by Atmospheric Minimalism
---

# Portfolio Prompt & Specifications

## 1. Design System Foundation

### Color Palette & Accessibility


### Typography

- **Body & Metadata:** Neutral neo-grotesque sans-serif (e.g., Inter), optimized for reading multi-line code specs and technical descriptions.

### Grid & Density
- **Desktop:** 12-column calibrated grid with fixed 24px gutters and compact 16px internal card padding, echoing an IDE interface.
- **Mobile:** Single-column linear stack; persistent bottom dock for high-priority actions.

---

## 2. Section Layouts

1. HERO

Goal:
A visitor must understand what Priyanshu does within five seconds.

Primary headline:
“AI/ML Student. Technical Problem-Solver. Analytical Thinker.”

Supporting text:
“I’m a BTech Artificial Intelligence student building technical foundations in C and C++ while developing an analytical perspective through market analysis and an interest in technology, products, and consumer behavior.”

Use a compact supporting line:
“AI/ML • Technical Problem Solving • Analytical Thinking”

Primary CTA:
“View My Projects”

Secondary CTA:
“Let’s Connect”

The primary CTA must remain easily reachable at phone width. On mobile, keep the CTA visible without requiring excessive scrolling and make it large enough to tap comfortably.

Hero visual direction:
Do not use a generic AI robot, random code wallpaper, floating 3D objects, decorative shapes, or a large gradient. Use a structured visual treatment based around technical/analytical themes, such as subtle data-oriented visual elements, typography, or a restrained project preview.

2. ABOUT

Heading:
“About Me”

Body:
“I’m currently pursuing a Bachelor of Technology in Artificial Intelligence at GIET University. My technical foundation includes C and C++, while my interests extend into market analysis, strategic product thinking, and consumer behavior.

I enjoy connecting technical problem-solving with analytical thinking and looking at problems from more than one perspective.”

Use a concise visual identity statement:
“Technology + Analysis + Strategy”

Do not present this section as claiming professional industry experience.

3. SKILLS

Heading:
“What I Work With”

Organize skills into meaningful groups rather than three identical cards.

Technical Foundations:
- C
- C++

Core Direction:
- Artificial Intelligence
- Machine Learning

Analytical Interests:
- Market Analysis
- Risk Assessment
- Data Evaluation

Strategic Interests:
- Product Marketing
- Consumer Behavior
- Strategic Thinking

Use typography, tags, lists, or an asymmetric layout instead of three identical card columns.

4. PROJECTS

This must be the MOST VISUALLY PROMINENT section on the entire page.

Heading:
“Projects”

Intro:
“Selected work that reflects how I approach technical problems, AI/ML, and analytical thinking.”

Important:
Do not invent project names, technologies, results, datasets, metrics, or achievements that have not been provided.

Because specific completed projects have not been supplied, create the project area as a visually strong portfolio structure with editable project entries.

Use a large featured-project layout rather than a row of three identical cards.

Featured project placeholder:
“Project 01 — [Project Name]”

Fields:
- Problem
- Approach
- Technologies
- Outcome
- View Project

Additional projects:
“Project 02 — [Project Name]”
“Project 03 — [Project Name]”

Each project should visually prioritize:
1. Problem
2. Solution/approach
3. Technical work
4. Result

Do not fabricate the content of these fields.

The Projects section should have the strongest visual hierarchy on the page through project previews, large project imagery/placeholders, structured case-study information, and clear navigation.

5. EDUCATION

Heading:
“Education”

Institution:
“GIET University, Gunupur”

Degree:
“Bachelor of Technology — Artificial Intelligence”

Period:
“July 2025 – April 2029”

Status:
“Currently pursuing”

Keep this section concise and factual.

6. ACHIEVEMENTS

Heading:
“Achievements & Progress”

Do not invent awards, certifications, rankings, competition results, or professional achievements.

Instead, present verified profile-based progress:

- BTech student specializing in Artificial Intelligence.
- Building technical foundations in C and C++.
- Developing analytical thinking through market analysis.
- Exploring the intersection of technology, finance, products, and consumer behavior.

Label this section honestly as “Achievements & Progress” rather than implying formal awards.

7. CONTACT

Heading:
“Let’s Connect”

Supporting text:
“I’m interested in connecting with peers, founders, and professionals working at the intersection of technology, finance, and innovation.”

CTA:
“Connect With Me”

Include:
- LinkedIn
- Email

LinkedIn:
www.linkedin.com/in/priyanshu-sahoo-196b61379

Email:
priyanshusahoo9938@gmail.com

Do not add phone numbers, GitHub profiles, social accounts, or other contact details unless supplied.

RESPONSIVE DESIGN

Desktop:
- Use a strong editorial layout with generous whitespace.
- Keep navigation simple.
- Give Projects substantially more visual space than other sections.
- Maintain clear hierarchy between sections.

Tablet:
- Preserve the same hierarchy while reducing horizontal spacing.
- Keep project information readable without excessive card stacking.

Mobile:
- Use a single-column flow.
- Keep the primary “View My Projects” CTA immediately accessible in the Hero.
- Make buttons comfortably tappable.
- Avoid horizontal overflow.
- Do not shrink text excessively.
- Preserve generous vertical spacing.
- Projects should remain the strongest visual section even on a small screen.

### Stage 1: Page Structure Scaffold
```markdown
Task: Create the semantic React page structure (src/App.jsx) following the PRD section order:
1. Details / Hero Section
2. Projects Section
3. Skills & Certifications Section
4. Experience & Education Section
5. Contact Section

Rules:
- Standard JSX semantic HTML tags (h1-h6, p, div, section, ul, li) and placeholder text blocks only.
- No CSS styling, no inline styles, no classes.
- No complex components, no buttons, no interactive widgets.
- Stop and request confirmation once scaffold is created.
```

### Stage 2: Visual Design System Implementation
```markdown
Task: Apply visual design system from DESIGN.md (Liminal Horizon theme) to the React app using Vanilla CSS (src/index.css).

Rules:
- Implement CSS custom properties for palette, typography, spacing, and border radiuses.
- Load and configure Google Fonts: Space Grotesk, Newsreader, JetBrains Mono.
- Structure responsive layout (12-column desktop, 8-column tablet, 4-column mobile).
- Add analog film grain texture and subtle border hierarchy.
- Do NOT add new content or components; keep Stage 1 placeholders.
- Stop and request confirmation once visual design is complete.
```

ACCESSIBILITY

Body text must maintain at least a 4.5:1 contrast ratio against its background.

Do not use low-contrast grey text on the background.

Ensure buttons and links are visually distinguishable.

Maintain readable font sizes and comfortable line spacing.

DESIGN LANGUAGE

The overall interface should communicate:
ANALYTICAL + TECHNICAL + STRATEGIC

The visitor's intended first impression:
“This person is analytical, technically capable, and has a perspective beyond just coding.”

The portfolio should position Priyanshu as an emerging AI/ML and technical problem-solver with analytical and strategic interests—not as an established expert, not as only a coder, and not as a generic developer.

AVOID REPEATEDLY

Never:
- Present him as only a coder.
- Create a generic developer-portfolio aesthetic.
- Exaggerate experience or expertise.
- Make finance the entire identity.
- Make AI/ML the entire identity.
- Use decorative elements without purpose.
- Use large gradient backgrounds.
- Use glass-effect panels.
- Use decorative floating shapes.
- Use rows of three identical cards.
- Use oversized headings merely for visual impact.