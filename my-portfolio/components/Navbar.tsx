export default function Navbar() {
  return (
    <header className="site-header">
      <div className="max-width">
        <nav className="nav-bar nav-shell">
          <span className="nav-brand">Ayman</span>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
