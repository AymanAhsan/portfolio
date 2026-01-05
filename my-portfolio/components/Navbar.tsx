"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="max-width">
        <nav className="nav-bar nav-shell">
          <span className="nav-brand">Ayman</span>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="nav-links hidden md:flex">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-surface border-b border-outline rounded-b-lg shadow-lg">
              <div className="nav-links flex-col flex gap-0 p-4">
                <a href="/" onClick={() => setIsOpen(false)} className="py-2">Home</a>
                <a href="/about" onClick={() => setIsOpen(false)} className="py-2">About</a>
                <a href="/projects" onClick={() => setIsOpen(false)} className="py-2">Projects</a>
                <a href="/resume" onClick={() => setIsOpen(false)} className="py-2">Resume</a>
                <a href="/contact" onClick={() => setIsOpen(false)} className="py-2">Contact</a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
