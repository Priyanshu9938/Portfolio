export default function App() {
  return (
    <div className="page-wrapper">
      {/* 1. Details / Hero Header */}
      <header className="scaffold-section">
        <div className="section-meta-bar">
          <span className="meta-mono">01 // Details & Profile</span>
          <span className="meta-mono">Gunupur, Odisha, India</span>
        </div>

        <div className="hero-header">
          <h1 className="display-hero">Priyanshu Sahoo</h1>
          <p className="hero-subhead">
            BTech AI/ML ’28 | Bridging Technical Problem Solving (C/C++) with Market & Financial Analysis
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

      <main>
        {/* 2. Projects (Empty: Not listed in Profile.pdf) */}
        <section className="scaffold-section" id="projects">
          <div className="section-meta-bar">
            <span className="meta-mono">02 // Projects</span>
            <span className="meta-mono">Status // Unlisted in Profile</span>
          </div>
          <h2 className="headline-lg">Projects</h2>
          <div className="empty-section-notice">
            {/* Intentionally left empty: missing in Profile.pdf */}
          </div>
        </section>

        {/* 3. Skills & Certifications */}
        <section className="scaffold-section" id="skills">
          <div className="section-meta-bar">
            <span className="meta-mono">03 // Capabilities & Credentials</span>
            <span className="meta-mono">Technical & Professional</span>
          </div>
          <h2 className="headline-lg">Skills & Certifications</h2>

          <div className="two-column-grid">
            <div className="scaffold-card">
              <div className="card-meta-bar">
                <span>03.1 // PROFICIENCIES</span>
                <span>TOP SKILLS</span>
              </div>
              <h3 className="headline-sm">Top Skills</h3>
              <ul className="badge-list">
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
              <div className="empty-section-notice">
                {/* Intentionally left empty: missing in Profile.pdf */}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Experience & Education */}
        <section className="scaffold-section" id="experience">
          <div className="section-meta-bar">
            <span className="meta-mono">04 // Trajectory & Background</span>
            <span className="meta-mono">Career & Academia</span>
          </div>
          <h2 className="headline-lg">Experience & Education</h2>

          <div className="two-column-grid">
            <div>
              <h3 className="headline-sm" style={{ marginBottom: 'var(--space-md)' }}>Experience</h3>
              <div className="timeline-list">
                {/* Intentionally left empty: missing in Profile.pdf */}
                <div className="empty-section-notice"></div>
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
      <footer className="scaffold-section" id="contact">
        <div className="section-meta-bar">
          <span className="meta-mono">05 // Connectivity</span>
          <span className="meta-mono">Direct Communication</span>
        </div>
        <h2 className="headline-lg">Contact</h2>
        <div className="scaffold-card">
          <div className="card-meta-bar">
            <span>CHANNELS // DIRECT</span>
            <span>VERIFIED DETAILS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            <div>
              <span className="label-sm" style={{ display: 'block', color: 'var(--outline)', marginBottom: 'var(--space-2xs)' }}>Email</span>
              <a href="mailto:priyanshusahoo9938@gmail.com" className="contact-link">
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
              >
                www.linkedin.com/in/priyanshu-sahoo-196b61379 (LinkedIn)
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
