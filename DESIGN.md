---
name: Liminal Horizon
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5e5e5e'
  primary: '#5c5c5c'
  on-primary: '#ffffff'
  primary-container: '#747474'
  on-primary-container: '#fefcfc'
  inverse-primary: '#c7c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#5c5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#747474'
  on-tertiary-container: '#fefcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e2e2'
  primary-fixed-dim: '#c7c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#464747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '500'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 42px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '400'
    lineHeight: 46px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Newsreader
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
  body-sm:
    fontFamily: Newsreader
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  code-body:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.09em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-2xs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
  space-5xl: 9rem
  gutter-desktop: 2rem
  gutter-mobile: 1rem
  max-content-width: 1240px
  max-prose-width: 680px
---

## Brand & Style

This design system embodies the identity of a strategic technologist, researcher, and systems thinker standing at the boundary between deep computation and poetic humanism. Drawing visual essence from vast liminal landscapes—mist-shrouded coastal horizons, solitary field figures, and tactile grain—the interface balances intellectual rigor with contemplative quiet.

The core design movement is **Editorial Brutalism softened by Atmospheric Minimalism**. It explicitly rejects the hyperactive tropes of the technology sector: no neon cybernetics, no glossy skeuomorphism, and no decorative animations. Instead, the design system cultivates:
- **Atmospheric Solitude:** Clean, light tones that allow thought and focus to emerge naturally.
- **Architectural Restraint:** High density of thought accompanied by generous, structured breathing room.
- **Intellectual Clarity:** High readability with stark typographic contrasts between precise monospace technical data and literary editorial phrasing.

## Colors

The system uses a light base grounded in clean monochromatic tones, favoring restrained neutral grays over stark unnatural contrasts.

### Palette Architecture
- **Base Canvas (`#777777`):** The foundational neutral void, evoking structured stone and clear daylight.
- **Tonal Layers:** Monochromatic slate undertones establishing structural separation without hard drop-shadows.
- **Typography Bones:** High-contrast, fatigue-free reading surfaces.
- **Accents:** Monochrome functional highlights. Used with surgical discipline strictly allocated to active system states, key metric callouts, and navigational focal points.

## Typography

The typographical pairing creates a dialogue between technological precision and human contemplative writing:
- **Headings (Space Grotesk):** Crisp, geometric, structural. Carries analytical momentum and modern architectural framing.
- **Narrative & Prose (Newsreader):** Literary, warm, human. Reminiscent of physical journals and academic essays, establishing prolonged immersion.
- **Metadata, Timestamps & Labels (JetBrains Mono):** Highly functional, unadorned, calibrated to render indices, coordinates, and technical properties with mechanical honesty.

## Layout & Spacing

The layout is built around wide, meditative horizons with asymmetric tension. It alternates between expansive vistas of open canvas and tightly orchestrated technical modules.

### Grid Architecture
- **Desktop (1024px+):** 12-column asymmetric grid with generous 2rem (`32px`) gutters and outer page padding scaling up to `space-4xl`.
- **Tablet (768px - 1023px):** 8-column layout with 1.5rem (`24px`) gutters.
- **Mobile (320px - 767px):** 4-column flow with 1rem (`16px`) gutters and edge margins.

### Rhythmic Rules
- Long-form essays and case analyses strictly adhere to `max-prose-width` (680px) to maintain a natural optical cadence.
- Sections are bounded by calibrated silence—utilizing `space-4xl` and `space-5xl` margins between structural chapters rather than ornamental dividers.

## Elevation & Depth

This system avoids synthetic drop-shadows and blurred colored glows. Depth is created through atmospheric perspective and boundary precision:

1. **Tonal Planar Stacking:** Surfaces step forward via calculated lightness shifts.
2. **Subtle Outlines:** Boundaries are defined by razor-thin, low-contrast borders.
3. **Film Grain & Texture:** A subtle CSS or canvas SVG noise texture is applied to the main view layer to recreate analog film depth and eliminate sterile digital flat surfaces.

## Shapes

The shape grammar is restrained and structured:
- Base corner radius is tight (`0.25rem` / `4px`), offering clean, architectural discipline without the aggressive bite of pure brutalism.
- Cards, data cells, code frames, and system inputs share uniform 4px corners.
- Interactive status indicators, counter pills, and micro-badges use circular or pill geometry (`9999px`) solely to differentiate dynamic system states from structural frames.

## Components

### Buttons
- **Primary:** Solid monochromatic fill with contrasting text, 4px corner radius, JetBrains Mono medium label.
- **Secondary / Ghost:** Transparent background, 1px border, clean typography.
- **Monastic Link:** Text link underlined with an offset 1px line.

### Cards & Analytical Modules
- Bounded by 1px subtle borders over structured backgrounds.
- Headers are split with a technical meta-bar: mono index counter on the left, timestamp on the right, separated by a faint horizontal keyline.
- Generous internal padding (`space-xl` on desktop, `space-md` on mobile).

### Chips & Badges
- Strict monospaced typography (`label-sm`).
- Bordered with translucent fills.

### Input Fields
- Understated container with clean background, bordered with 1px structural lines.
- Text renders using `Newsreader` for open-ended editorial thoughts and `JetBrains Mono` for programmatic parameters.

### Lists & Technical Catalogs
- Ruled list items divided by horizontal hairpins.
- Columns align metadata (`JetBrains Mono`, muted slate) beside titles (`Space Grotesk`).