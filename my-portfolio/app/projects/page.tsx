import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: "Local Event Finder",
    desc: "A web app that helps users discover local events based on their interests and location.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    image: "/dashboard.png",
    url: "http://teamstar-production.up.railway.app/",
  },
  { title: "AI Summarizer", 
    desc: "A website that extracts text from PDFs and generates concise summaries using AI.", 
    stack: ["React", "TypeScript", "Python", "FastAPI", "Gemini"],
    image: "/Project1.png",
    url: "https://ai-summarizer.up.railway.app/" },
  { title: "Coming Soon", desc: "Stay tuned." },
];

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero-no-card">
          <div>
            <p className="pill">Featured Work</p>
            <h1>Projects & Case Studies</h1>
            <p>A showcase of my recent work, from concept to deployment</p>
          </div>
        </section>

        <section className="section">
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                desc={project.desc}
                stack={project.stack}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
