"use client"

import TypingEffect from "@/components/TypeEffect";
import { useEffect, useState } from "react";
import { ChevronDown, Layers, GraduationCap, Rocket, Mail, Github } from "lucide-react";

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
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl md:text-4xl">
          My name is
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 text-center">
          Ayman Ahsan
        </h1>
        <TypingEffect words={["SOFTWARE ENGINEER", "FULL-STACK DEVELOPER", "STARTUP FOUNDER"] as const} />
        
        <div 
          className="mt-8 text-base md:text-lg font-medium transition-all duration-500"
          style={{
            opacity: Math.min(1, scrollY / 200),
            transform: `translateY(${Math.max(0, 20 - scrollY / 10)}px)`,
            color: '#ff4f5f'
          }}
        >
          Powered by Next.JS
        </div>
        
        <div 
          className="flex flex-col md:flex-row gap-4 mt-8 transition-all duration-500"
          style={{
            opacity: Math.min(1, scrollY / 200),
            transform: `translateY(${Math.max(0, 20 - scrollY / 10)}px)`
          }}
        >
          <button 
            className="group px-6 py-3 rounded-full border-2 border-white/20 bg-white/5 flex items-center gap-3 transition-all duration-300 hover:bg-white hover:border-white active:scale-95"
            onClick={() => window.location.href = 'mailto:aymanahsan06@gmail.com'}
          >
            <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
            <span className="text-base font-medium text-white group-hover:text-black transition-colors duration-300">
              Email
            </span>
          </button>
          
          <button 
            className="group px-6 py-3 rounded-full border-2 border-white/20 bg-white/5 flex items-center gap-3 transition-all duration-300 hover:bg-white hover:border-white active:scale-95"
            onClick={() => window.open('https://www.linkedin.com/in/ayman-ahsan-4029322a1/', '_blank')}
          >
            <svg className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-base font-medium text-white group-hover:text-black transition-colors duration-300">
              LinkedIn
            </span>
          </button>
          
          <button 
            className="group px-6 py-3 rounded-full border-2 border-white/20 bg-white/5 flex items-center gap-3 transition-all duration-300 hover:bg-white hover:border-white active:scale-95"
            onClick={() => window.open('https://github.com/AymanAhsan', '_blank')}
          >
            <Github className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
            <span className="text-base font-medium text-white group-hover:text-black transition-colors duration-300">
              GitHub
            </span>
          </button>
        </div>
        
      </main>

      <section 
        className="min-h-screen p-4 md:p-8 transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${Math.max(0, 100 - scrollY / 3)}vh)`,
          background: 'var(--surface)',
          border: '2px solid var(--outline)',
          borderRadius: 'var(--radius)',
          boxShadow: '0 0 0 1px rgba(230, 57, 70, 0.2), var(--shadow)',
        }}
      >
        <div className="max-width stack">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-5xl mx-auto items-start">

            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <Layers size={80} md-size={120} strokeWidth={2} color="#ff4f5f" className="flex-shrink-0" />
                <h3 className="text-3xl md:text-6xl font-extrabold leading-tight" style={{ color: '#d9d9d9' }}>
                  Full-Stack Developer
                </h3>
              </div>

              <p className="text-base md:text-xl leading-relaxed max-w-3xl" style={{ color: '#c7c7c7' }}>
                I am a passionate software engineer with expertise in building scalable web applications. With a strong foundation in both frontend and backend technologies, I thrive on creating seamless user experiences and efficient solutions.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start md:items-center gap-4 border-t border-b border-[rgba(255,255,255,0.08)] py-4">
                  <span className="text-lg flex-shrink-0" style={{ color: '#ff4f5f' }}>01</span>
                  <span className="text-sm md:text-2xl font-semibold" style={{ color: '#e5e5e5' }}>React, Node.js, Express.js, Next.js, FastAPI, Django</span>
                </div>
                <div className="flex items-start md:items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg flex-shrink-0" style={{ color: '#ff4f5f' }}>02</span>
                  <span className="text-sm md:text-2xl font-semibold" style={{ color: '#e5e5e5' }}>REST APIs, Supabase, PostgreSQL, Docker</span>
                </div>
                <div className="flex items-start md:items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg flex-shrink-0" style={{ color: '#ff4f5f' }}>03</span>
                  <span className="text-sm md:text-2xl font-semibold" style={{ color: '#e5e5e5' }}>Git, GitHub, Postman</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-5xl mx-auto items-start mt-16">

            <div className="flex-1 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <GraduationCap size={80} md-size={110} strokeWidth={2} color="#ff4f5f" className="flex-shrink-0" />
                <h3 className="text-3xl md:text-5xl font-extrabold leading-tight" style={{ color: '#d9d9d9' }}>
                  Computer Science Student
                </h3>
              </div>

              <p className="text-base md:text-xl leading-relaxed max-w-3xl" style={{ color: '#c7c7c7' }}>
                Junior at the City College of New York (CUNY), pursuing a B.S. in Computer Science. Building strong foundations in algorithms, data structures, and software development principles while applying them to real projects.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start md:items-center gap-4 border-t border-b border-[rgba(255,255,255,0.08)] py-4">
                  <span className="text-lg flex-shrink-0" style={{ color: '#ff4f5f' }}>01</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>CUNY — City College of New York</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>02</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>B.S. in Computer Science (Junior)</span>
                </div>
                <div className="flex items-center gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4">
                  <span className="text-lg" style={{ color: '#ff4f5f' }}>03</span>
                  <span className="text-2xl font-semibold" style={{ color: '#e5e5e5' }}>Focus: Algorithms, Data Structures, Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-32 pt-24 border-t border-[rgba(255,255,255,0.08)]">
            <div className="flex flex-col items-center gap-12 max-w-5xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <img src="/logo.png" alt="NIA Logo" className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0" />
                <div className="flex flex-col gap-4">
                  <h3 className="text-4xl md:text-6xl font-extrabold text-center md:text-left" style={{ color: '#d9d9d9' }}>
                    Startup Founder
                  </h3>
                  <p className="text-lg md:text-2xl font-semibold text-center md:text-left" style={{ color: '#ff4f5f' }}>
                    Network Intelligence Applied (NIA)
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-center max-w-3xl" style={{ color: '#c7c7c7' }}>
                NIA is an intelligent event discovery platform that leverages geolocation and AI to help users find nearby events and venues. Our mission is to transform how people discover local experiences through smart recommendations and real-time venue intelligence.
              </p>

              <div className="w-full rounded-lg overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-lg">
                <img src="/dashboard.png" alt="NIA Platform - Event Discovery Dashboard" className="w-full h-auto" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 79, 95, 0.08)', borderLeft: '4px solid #ff4f5f' }}>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#ff4f5f' }}>Smart Discovery</h4>
                  <p className="text-sm" style={{ color: '#a9a9a9' }}>AI-powered recommendations based on user preferences and location</p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 79, 95, 0.08)', borderLeft: '4px solid #ff4f5f' }}>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#ff4f5f' }}>Geolocation</h4>
                  <p className="text-sm" style={{ color: '#a9a9a9' }}>Real-time venue detection and proximity-based event suggestions</p>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 79, 95, 0.08)', borderLeft: '4px solid #ff4f5f' }}>
                  <h4 className="text-lg font-bold mb-2" style={{ color: '#ff4f5f' }}>Local Focus</h4>
                  <p className="text-sm" style={{ color: '#a9a9a9' }}>Discover hidden gems and trending events in your neighborhood</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
