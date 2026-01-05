export default function AboutPage() {
  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero">
          <div>
            <p className="pill">About</p>
            <h1>About Me</h1>
            <p>I build modern web experiences with a focus on performance, accessibility, and clean design.</p>
          </div>
          <div className="stack">
            <p className="tagline">Snapshot</p>
            <p className="card">
              Based in Your City. Currently available for freelance and full-time opportunities.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Expertise</h2>
          <div className="grid">
            <div className="card">
              <h3>Frontend</h3>
              <p>React, Next.js, TypeScript, design systems, animations.</p>
            </div>
            <div className="card">
              <h3>Backend</h3>
              <p>Node.js, APIs, auth, data modeling, performance.</p>
            </div>
            <div className="card">
              <h3>Collaboration</h3>
              <p>Product thinking, UX pairing, rapid prototyping, delivery.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
