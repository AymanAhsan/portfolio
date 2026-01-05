export default function ContactPage() {
  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero">
          <div>
            <p className="pill">Contact</p>
            <h1>Let’s talk</h1>
            <p>Have a project or role in mind? Drop a line and I’ll get back quickly.</p>
          </div>
          <div className="stack">
            <p className="tagline">Email</p>
            <div className="card">
              <p>you@example.com</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Availability</h2>
          <div className="card">
            <p>Open to freelance and full-time opportunities. Based in Your City, working remotely worldwide.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
