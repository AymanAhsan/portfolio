'use client';

import { useState } from 'react';
import './contact.css';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'aymanahsan06@gmail.com'; 

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero-no-card">
          <div>
            <h1>Get in Touch</h1>
          </div>
        </section>

        <section className="section">
          <div className="contact-form-container">
            <div className="contact-email-display">
              <p className="contact-description">
                I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
                or just want to say hello, feel free to reach out via email.
              </p>
              
              <div className="email-container">
                <div className="email-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span className="email-text">{email}</span>
                  <button 
                    className={`copy-button ${copied ? 'copied' : ''}`}
                    onClick={copyToClipboard}
                    aria-label="Copy email to clipboard"
                  >
                    {copied ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                      </svg>
                    )}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              <p className="response-note">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                I usually respond within 24 hours
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
