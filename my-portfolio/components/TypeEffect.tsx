"use client"

import { useState, useEffect } from 'react';
import { Electrolize } from 'next/font/google'

const electrolize = Electrolize({ weight: '400', subsets: ['latin'] })

export default function TypingEffect({ words }: { words: readonly string[] }) {
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentTitle = words[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 3000;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          // Move to next title
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);
  
  return (
    <h3 className={`text-2xl md:text-4xl mt-6 font-bold text-center ${electrolize.className}`} style={{ color: '#ff4f5f' }}>
      <span>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </h3>
  );
}