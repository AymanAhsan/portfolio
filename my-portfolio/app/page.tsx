"use client"

import TypingEffect from "@/components/TypeEffect";
import { useEffect, useState } from "react";
import { ChevronDown, Layers, GraduationCap  } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl">
          My name is
        </h2>
        <h1 className="text-5xl font-extrabold mt-4">
          Ayman Ahsan
        </h1>
        <TypingEffect words={["SOFTWARE ENGINEER", "FULLSTACK DEVELOPER", "STARTUP FOUNDER"] as const} />
        
        <div 
          className="mt-8 text-lg font-medium transition-all duration-500"
          style={{
            opacity: Math.min(1, scrollY / 200),
            transform: `translateY(${Math.max(0, 20 - scrollY / 10)}px)`,
            color: '#ff4f5f'
          }}
        >
          Powered by Next.JS
        </div>
        
      </main>

      <section 
        className="min-h-screen p-8 transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${Math.max(0, 100 - scrollY / 3)}vh)`,
          background: 'var(--surface)',
          border: '2px solid var(--outline)',
          borderRadius: 'var(--radius)',
          boxShadow: '0 0 0 1px rgba(230, 57, 70, 0.2), var(--shadow)',
        }}
      >
        <div className="max-width stack">
          <div className="flex gap-12 max-w-5xl mx-auto items-start">

            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <Layers size={120} strokeWidth={2} color="#ff4f5f" className="flex-shrink-0" />
                <h3 className="text-6xl font-extrabold leading-tight" style={{ color: '#d9d9d9' }}>
                  Full-Stack Development
                </h3>
              </div>

              <p className="text-xl leading-relaxed max-w-3xl" style={{ color: '#c7c7c7' }}>
                I am a passionate software engineer with expertise in building scalable web applications. With a strong foundation in both frontend and backend technologies, I thrive on creating seamless user experiences and efficient solutions.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 border-t border-b border-[rgba(255,255,255,0.08)] py-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>01</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>React, Node.js, Express.js, Next.js, FastAPI, Django</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>02</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>REST APIs, Supabase, PostgreSQL, Docker</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>03</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>Git, GitHub, Postman</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-12 max-w-5xl mx-auto items-start mt-16">

            <div className="flex-1 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <GraduationCap size={110} strokeWidth={2} color="#ff4f5f" className="flex-shrink-0" />
                <h3 className="text-5xl font-extrabold leading-tight" style={{ color: '#d9d9d9' }}>
                  Computer Science Student
                </h3>
              </div>

              <p className="text-xl leading-relaxed max-w-3xl" style={{ color: '#c7c7c7' }}>
                Sophomore at the City College of New York (CUNY), pursuing a B.S. in Computer Science. Building strong foundations in algorithms, data structures, and software development principles while applying them to real projects.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 border-t border-b border-[rgba(255,255,255,0.08)] py-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>01</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>CUNY — City College of New York</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>02</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>B.S. in Computer Science (Sophomore)</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>03</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>Focus: algorithms, data structures, software engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
