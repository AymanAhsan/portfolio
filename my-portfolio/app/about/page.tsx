"use client";

import { useMemo, useState } from "react";
import { Cloud, Smartphone } from "lucide-react";

const experiences = [
  {
    title: "Founder & Lead Engineer",
    company: "Network Intelligence Applied (NIA)",
    period: "2024 — Present",
    summary: "Building an intelligent event discovery platform with geolocation, AI recommendations, and real-time venue intelligence.",
    highlights: [
      "Developed a scalable frontend architecture with React, TypeScript, and Tailwind, implementing robust state management to handle streamlined user data handling across the platform, improving load times and user experience",
      "Optimized NodeJS API endpoints and PostgreSQL queries, reducing server response times for geolocation-heavy data requests by 85%",
      "Implemented OAuth2 authentication using Supabase, creating user accounts and session management that enhanced login security and reduced unauthorized access",
      "Engineered application security by implementing Row-Level Security (RLS) policies, which protected user session data and prevented unauthorized data exposure",
      "Designed PostgreSQL database schemas, applying one-to-many and many-to-many relationships, foreign keys, and database triggers/functions to ensure efficiency and scalability",
      "Managed cloud-based database migration and environment configuration using PostgreSQL and Supabase, achieving 99.9% uptime for the initial web launch",
      "Developed a cross-platform mobile application using React Native and TypeScript, sharing core logic with the web stack to ensure feature parity, consistent user experience, and faster iteration across iOS and Android",
    ],
  },
  {
    title: "Software Engineer",
    company: "Freelance / Startup Collaborations",
    period: "Present",
    summary: "Delivered performant web apps for early-stage teams with rapid prototyping and production handoff.",
    highlights: [
      "Shipped responsive design systems and component libraries",
      "Implemented secure auth, payments, and analytics instrumentation",
      "Improved performance scores (Lighthouse 90+) through caching and profiling",
    ],
  },
];

const techLogos = [
  { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "TypeScript", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
  { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  { name: "Supabase", icon: Cloud },
  { name: "React Native", icon: Smartphone },
];

export default function AboutPage() {
  const [position, setPosition] = useState(20);

  const currentExperience = useMemo(
    () => (position < 50 ? experiences[0] : experiences[1]),
    [position]
  );

  const sliderBackground = useMemo(
    () => "linear-gradient(90deg, #ff8a00 0%, #ff4f5f 50%, #7c3aed 100%)",
    []
  );

  return (
    <main className="page-shell">
      <div className="max-width stack">
        <section className="hero">
          <div>
            <p className="pill">About</p>
            <h1>About Me</h1>
            <p>
              I build scalable full-stack apps with a focus on performance, accessibility, and clean design.
              I excel at React and Node.js, and I love collaborating on innovative projects that make a difference.
              As the Technical Founder of Network Intelligence Applied (NIA), I lead the development of cutting-edge solutions in network analytics.
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

        <section className="section" style={{ gap: "1.25rem", marginTop: "2rem" }}>
          <div className="flex-between" style={{ alignItems: "flex-end", gap: "0.75rem" }}>
            <h2 style={{ margin: 0 }}>Experience</h2>
            <p style={{ margin: 0, color: "var(--muted, rgba(255,255,255,0.7))", fontSize: "0.95rem" }}>
              Drag the bar to explore my journey
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", width: "100%" }}>
            <input
              type="range"
              min={0}
              max={100}
              value={position}
              onChange={(e) => setPosition(Number(e.target.value))}
              className="experience-slider"
              style={{
                width: "100%",
                appearance: "none",
                height: "12px",
                borderRadius: "999px",
                background: sliderBackground,
                backgroundSize: `${Math.max(position, 2)}% 100%`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "rgba(255,255,255,0.12)",
                outline: "none",
                transition: "box-shadow 200ms ease",
              }}
              aria-label="Experience timeline"
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--muted, rgba(255,255,255,0.65))" }}>
              <span>Earlier</span>
              <span>Now</span>
            </div>
          </div>

          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              transition: "transform 200ms ease, opacity 200ms ease",
              transform: `translateY(${position < 50 ? 4 : -4}px)`,
              opacity: 1,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <div>
                <p className="pill" style={{ marginBottom: "0.35rem" }}>
                  {currentExperience.company}
                </p>
                <h3 style={{ margin: 0 }}>{currentExperience.title}</h3>
              </div>
              <p style={{ margin: 0, color: "var(--muted, rgba(255,255,255,0.7))" }}>{currentExperience.period}</p>
            </div>
            <p style={{ margin: 0, color: "var(--muted, rgba(255,255,255,0.8))" }}>{currentExperience.summary}</p>
            <ul style={{ margin: 0, paddingLeft: "1.1rem", color: "var(--muted, rgba(255,255,255,0.8))", display: "grid", gap: "0.35rem" }}>
              {currentExperience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {currentExperience.company === "Network Intelligence Applied (NIA)" && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "0.5rem" }}>
                {techLogos.map((logo) => (
                  <span
                    key={logo.name}
                    className="pill"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      paddingRight: "0.75rem",
                      background: "rgba(255,79,95,0.12)",
                      border: "1px solid rgba(255,79,95,0.35)",
                      color: "#f7f7f7",
                    }}
                  >
                    {logo.icon ? (
                      <logo.icon style={{ width: 18, height: 18 }} />
                    ) : (
                      <img
                        src={logo.url}
                        alt={logo.name}
                        style={{ width: "18px", height: "18px", objectFit: "contain" }}
                      />
                    )}
                    {logo.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <style jsx>{`
        .experience-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: #fff;
          border: 2px solid #ff4f5f;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: transform 150ms ease, box-shadow 150ms ease;
        }
        .experience-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          background: #fff;
          border: 2px solid #ff4f5f;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          transition: transform 150ms ease, box-shadow 150ms ease;
        }
        .experience-slider::-webkit-slider-thumb:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }
        .experience-slider::-moz-range-thumb:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }
        .experience-slider::-webkit-slider-thumb:active {
          transform: scale(0.98);
        }
        .experience-slider::-moz-range-thumb:active {
          transform: scale(0.98);
        }
      `}</style>
    </main>
  );
}
