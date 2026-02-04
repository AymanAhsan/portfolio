export default function ResumePage() {
  const resumeFile = '/Ayman_Ahsan_Resume%20(1).pdf';

  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero-no-card">
          <div>
            <h1>My Resume</h1>
            <p>View or download my full resume</p>
          </div>
        </section>

        <section className="section">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <a 
              href={resumeFile}
              download="Ayman_Ahsan_Resume.pdf"
              className="button button-large"
              style={{ width: 'auto' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <div style={{
            width: '100%',
            maxWidth: '900px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(20, 21, 28, 0.7), rgba(12, 13, 18, 0.6))',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
          }}>
            <iframe
              src={resumeFile}
              style={{
                width: '100%',
                height: '80vh',
                minHeight: '600px',
                border: 'none',
                display: 'block'
              }}
              title="Resume PDF Viewer"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
