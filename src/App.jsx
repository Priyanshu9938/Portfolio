import heroBg from '../backgroud.jpg';
import profilePhoto from '../IMG_20260904_195826_200.jpg';
import MetroHero from "@/components/ui/scroll-locked-video-hero";

export default function App() {
  return (
    <>
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ── GLOBAL BACKGROUND: Scroll-Locked Video Hero ── */}
      {/* Fixed behind all content, full viewport, non-interactive so page scrolls freely */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          width: '100vw',
          height: '100dvh',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <MetroHero
          fullBleed={true}
          background={true}
          title=""
          signature={false}
          sound={false}
          style={{
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── CONTENT LAYER (sits above the background) ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Top Architectural Navigation Bar */}
        <nav className="top-nav" aria-label="Portfolio Navigation">
          <div className="nav-inner">
            <a href="#details" className="nav-brand" id="nav-brand-logo">
              PRIYANSHU SAHOO <span className="nav-brand-dim">// BTECH AI '28</span>
            </a>
            <div className="nav-links">
              <a href="#details" className="nav-link" id="nav-link-details">01. Profile</a>
              <a href="#projects" className="nav-link" id="nav-link-projects">02. Projects</a>
              <a href="#skills" className="nav-link" id="nav-link-skills">03. Skills</a>
              <a href="#experience" className="nav-link" id="nav-link-experience">04. Education</a>
              <a href="#contact" className="nav-link" id="nav-link-contact">05. Contact</a>
            </div>
          </div>
        </nav>

        <div className="page-wrapper">
          {/* 1. Details / Hero Header */}
          <header
            className="scaffold-section hero-section"
            id="details"
            role="banner"
            style={{ '--hero-bg': `url(${heroBg})` }}
          >
            <div className="section-meta-bar">
              <span className="meta-mono">01 // Details &amp; Profile</span>
              <span className="meta-mono">Gunupur, Odisha, India</span>
            </div>

            <div className="hero-header">
              <div className="hero-identity">
                <img
                  className="profile-icon"
                  src={profilePhoto}
                  alt="Priyanshu Sahoo"
                />
                <h1 className="display-hero">Priyanshu Sahoo</h1>
              </div>
              <p className="hero-subhead">
                BTech AI/ML '28 | Bridging Technical Problem Solving (C/C++) with Market &amp; Financial Analysis
              </p>
              <p className="hero-location">Gunupur, Odisha, India</p>
            </div>

            <div className="scaffold-card">
              <div className="card-meta-bar">
                <span>INDEX // 01.1</span>
                <span>SUMMARY</span>
              </div>
              <h2 className="headline-sm">Summary</h2>
              <div className="body-md editorial-prose">
                <p>
                  2nd BTech student specializing in Artificial Intelligence and Machine Learning, combining technical foundations in C and C++ with a sharp analytical edge from active stock trading and market analysis. Critical thinking and rigorous data evaluation aren't just concepts on a screen for me—they are daily disciplines applied to reading market trends and assessing risk. I bring a unique dual perspective bridging core computer science with strategic product marketing and consumer behavior. Always looking to connect with peers, founders, and professionals at the intersection of tech, finance, and innovation.
                </p>
              </div>
            </div>
          </header>

          <main id="main-content" role="main">
            {/* 2. Projects (Empty: Not listed in Profile.pdf) */}
            <section className="scaffold-section" id="projects" aria-labelledby="heading-projects">
              <div className="section-meta-bar">
                <span className="meta-mono">02 // Projects</span>
                <span className="meta-mono">Status // Unlisted in Profile</span>
              </div>
              <h2 className="headline-lg" id="heading-projects">Projects</h2>
              <div className="empty-section-notice" aria-label="Projects section is currently empty">
                {/* Intentionally left empty: missing in Profile.pdf */}
              </div>
            </section>

            {/* 3. Skills & Certifications */}
            <section className="scaffold-section" id="skills" aria-labelledby="heading-skills">
              <div className="section-meta-bar">
                <span className="meta-mono">03 // Capabilities &amp; Credentials</span>
                <span className="meta-mono">Technical &amp; Professional</span>
              </div>
              <h2 className="headline-lg" id="heading-skills">Skills &amp; Certifications</h2>

              <div className="two-column-grid">
                <div className="scaffold-card">
                  <div className="card-meta-bar">
                    <span>03.1 // PROFICIENCIES</span>
                    <span>TOP SKILLS</span>
                  </div>
                  <h3 className="headline-sm">Top Skills</h3>
                  <ul className="badge-list" aria-label="Top skills list">
                    <li className="badge-item">Engineering</li>
                    <li className="badge-item">Project Management</li>
                    <li className="badge-item">English</li>
                  </ul>
                </div>

                <div className="scaffold-card">
                  <div className="card-meta-bar">
                    <span>03.2 // ACCREDITATIONS</span>
                    <span>CERTIFICATIONS</span>
                  </div>
                  <h3 className="headline-sm">Certifications</h3>
                  <div className="empty-section-notice" aria-label="Certifications section is currently empty">
                    {/* Intentionally left empty: missing in Profile.pdf */}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Experience & Education */}
            <section className="scaffold-section" id="experience" aria-labelledby="heading-experience">
              <div className="section-meta-bar">
                <span className="meta-mono">04 // Trajectory &amp; Background</span>
                <span className="meta-mono">Career &amp; Academia</span>
              </div>
              <h2 className="headline-lg" id="heading-experience">Experience &amp; Education</h2>

              <div className="two-column-grid">
                <div>
                  <h3 className="headline-sm" style={{ marginBottom: 'var(--space-md)' }}>Experience</h3>
                  <div className="timeline-list">
                    {/* Intentionally left empty: missing in Profile.pdf */}
                    <div className="empty-section-notice" aria-label="Experience section is currently empty"></div>
                  </div>
                </div>

                <div>
                  <h3 className="headline-sm" style={{ marginBottom: 'var(--space-md)' }}>Education</h3>
                  <div className="timeline-list">
                    <div className="timeline-item">
                      <div className="timeline-header">
                        <span className="timeline-title">GIET University Gunupur</span>
                        <span className="timeline-date">July 2025 - April 2029</span>
                      </div>
                      <div className="timeline-role">Bachelor of Technology - BTech, Artificial Intelligence</div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-header">
                        <span className="timeline-title">GIET University Gunupur</span>
                        <span className="timeline-date">2025</span>
                      </div>
                      <div className="timeline-role">Bachelor of Technology - BTech, Artificial Intelligence</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* 5. Contact */}
          <footer className="scaffold-section" id="contact" role="contentinfo" aria-labelledby="heading-contact">
            <div className="section-meta-bar">
              <span className="meta-mono">05 // Connectivity</span>
              <span className="meta-mono">Direct Communication</span>
            </div>
            <h2 className="headline-lg" id="heading-contact">Contact</h2>
            <div className="scaffold-card">
              <div className="card-meta-bar">
                <span>CHANNELS // DIRECT</span>
                <span>VERIFIED DETAILS</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                <div>
                  <span className="label-sm" style={{ display: 'block', color: 'var(--outline)', marginBottom: 'var(--space-2xs)' }}>Email</span>
                  <a
                    href="mailto:priyanshusahoo9938@gmail.com"
                    className="contact-link"
                    id="link-contact-email"
                  >
                    priyanshusahoo9938@gmail.com
                  </a>
                </div>
                <div>
                  <span className="label-sm" style={{ display: 'block', color: 'var(--outline)', marginBottom: 'var(--space-2xs)' }}>LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/priyanshu-sahoo-196b61379"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    id="link-contact-linkedin"
                  >
                    www.linkedin.com/in/priyanshu-sahoo-196b61379 (LinkedIn)
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-colophon">
              <span className="meta-mono">Editorial Brutalism // Liminal Horizon</span>
              <span className="meta-mono">Designed for Priyanshu Sahoo · 2026</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
