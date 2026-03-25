'use client';
import { useState, useEffect } from 'react';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function ScrollDots() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = sections[0];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5 hidden lg:flex">
      {sections.map((section) => {
        const isActive = activeSection === section;
        return (
          <button
            key={section}
            onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
            aria-label={`Scroll to ${section}`}
            className={`rounded-full transition-all duration-300 mx-auto ${
              isActive
                ? 'w-3.5 h-3.5 bg-[#6c63ff] shadow-[0_0_12px_rgba(108,99,255,0.8)] scale-110'
                : 'w-2.5 h-2.5 bg-[#6c63ff]/30 hover:bg-[#6c63ff]/60'
            }`}
          />
        );
      })}
    </div>
  );
}
