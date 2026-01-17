"use client"

import { useEffect, useState, useCallback, useMemo, memo, lazy, Suspense } from "react";
import Image from "next/image";
import TypingEffect from "@/components/TypeEffect";
import { Mail, Github } from "lucide-react";
import { FullStackCard, StudentCard } from "@/components/ContentCards";
import "./home.css";

// Only lazy load below-fold content
const NIASection = lazy(() => import("@/components/NIASection"));

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Throttle mouse move to reduce state updates
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, cardIndex: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Only update if position changed significantly (reduce re-renders)
    setMousePos(prev => {
      if (Math.abs(prev.x - x) > 0.01 || Math.abs(prev.y - y) > 0.01) {
        return { x, y };
      }
      return prev;
    });
    
    if (hoveredCard !== cardIndex) {
      setHoveredCard(cardIndex);
    }
  }, [hoveredCard]);

  const handleCardMouseLeave = useCallback(() => {
    setHoveredCard(null);
  }, []);

  // Memoize card transform calculation
  const getCardTransform = useCallback((cardIndex: number) => {
    if (hoveredCard !== cardIndex) return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    const tiltX = (mousePos.y - 0.5) * -8;
    const tiltY = (mousePos.x - 0.5) * 8;
    return `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(12px)`;
  }, [hoveredCard, mousePos]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memoize scroll-based calculations
  const scrollOpacity = useMemo(() => Math.min(1, scrollY / 200), [scrollY]);
  const scrollTransform = useMemo(() => `translateY(${Math.max(0, 20 - scrollY / 10)}px)`, [scrollY]);
  const sectionTransform = useMemo(() => `translateY(${Math.max(0, 100 - scrollY / 3)}vh)`, [scrollY]);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl md:text-4xl">
          My name is
        </h2>
        <h1 className="hero-name text-4xl md:text-5xl font-extrabold mt-4 text-center">
          Ayman Ahsan
        </h1>
        <TypingEffect words={["SOFTWARE ENGINEER", "FULL-STACK DEVELOPER", "STARTUP FOUNDER"] as const} />
        
        <div 
          className="scroll-fade mt-8 text-base md:text-lg font-medium transition-all duration-500"
          style={{
            opacity: scrollOpacity,
            transform: scrollTransform,
            color: '#ff4f5f'
          }}
        >
          Powered by Next.JS
        </div>
        
        <div 
          className="scroll-fade flex flex-col md:flex-row gap-4 mt-8 transition-all duration-500"
          style={{
            opacity: scrollOpacity,
            transform: scrollTransform
          }}
        >
          <button 
            className="social-button group px-6 py-3 rounded-full flex items-center gap-3"
            onClick={() => window.location.href = 'mailto:aymanahsan06@gmail.com'}
          >
            <Mail className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300 icon-glow" />
            <span className="text-base font-medium text-white group-hover:text-black transition-colors duration-300">
              Email
            </span>
          </button>
          
          <button 
            className="social-button group px-6 py-3 rounded-full flex items-center gap-3"
            onClick={() => window.open('https://www.linkedin.com/in/ayman-ahsan-4029322a1/', '_blank')}
          >
            <svg className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300 fill-current icon-glow" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-base font-medium text-white group-hover:text-black transition-colors duration-300">
              LinkedIn
            </span>
          </button>
          
          <button 
            className="social-button group px-6 py-3 rounded-full flex items-center gap-3"
            onClick={() => window.open('https://github.com/AymanAhsan', '_blank')}
          >
            <Github className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300 icon-glow" />
            <span className="text-base font-medium text-white group-hover:text-black transition-colors duration-300">
              GitHub
            </span>
          </button>
        </div>
        
      </main>

      <section 
        className="content-section scroll-section min-h-screen p-4 md:p-8 transition-transform duration-700 ease-out"
        style={{
          transform: sectionTransform,
          borderRadius: 'var(--radius)',
        }}
      >
        <div className="max-width stack">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-5xl mx-auto items-start">
            <FullStackCard
              cardIndex={0}
              hoveredCard={hoveredCard}
              transform={getCardTransform(0)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 max-w-5xl mx-auto items-start mt-16">
            <StudentCard
              cardIndex={1}
              hoveredCard={hoveredCard}
              transform={getCardTransform(1)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            />
          </div>
          <Suspense fallback={
            <div className="flex justify-center mt-32 pt-24 border-t border-[rgba(255,255,255,0.08)]">
              <div className="w-full max-w-5xl h-96 bg-white/5 rounded-lg animate-pulse" />
            </div>
          }>
            <NIASection />
          </Suspense>
        </div>
      </section>
    </>
  );
}
