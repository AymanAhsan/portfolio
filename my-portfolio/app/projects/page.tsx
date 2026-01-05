const projects = [
  { title: "Showcase App", desc: "A polished SPA with smooth transitions and API integrations." },
  { title: "Design System", desc: "Reusable components, tokens, and documentation for a product team." },
  { title: "Analytics Dashboard", desc: "Data-rich UI with real-time charts and filters." },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero">
          <div>
            <p className="pill">Projects</p>
            <h1>Selected Work</h1>
            <p>Recent builds that balance visual polish with performance and maintainability.</p>
          </div>
        </section>

        <section className="section">
          <div className="grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
