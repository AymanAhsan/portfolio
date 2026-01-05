export default function ResumePage() {
  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero">
          <div>
            <p className="pill">Resume</p>
            <h1>Experience & Skills</h1>
            <p>Quick overview of roles, impact, and tools. Full PDF available on request.</p>
          </div>
          <div className="stack">
            <p className="tagline">Highlights</p>
            <div className="card">
              <p><strong>Senior Engineer</strong> — Delivered performant web apps, led UI architecture, mentored teams.</p>
              <p style={{ marginTop: "0.5rem" }}>Stack: Next.js, TypeScript, Node.js, design systems, CI/CD.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="grid">
            <div className="card">
              <h3>Languages</h3>
              <p>TypeScript, JavaScript, HTML, CSS, SQL</p>
            </div>
            <div className="card">
              <h3>Frameworks</h3>
              <p>Next.js, React, Node.js, Express</p>
            </div>
            <div className="card">
              <h3>Tools</h3>
              <p>GitHub, CI/CD, Jest/RTL, Storybook, Figma</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
