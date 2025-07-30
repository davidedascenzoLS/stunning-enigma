"use client";
import { useEffect, useState, useRef } from 'react';

export default function FullWidthSection({ image, title, link, className }) {

  const [isHovered, setIsHovered] = useState(false);
  const [isScrolledIntoView, setIsScrolledIntoView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Funzione per rilevare quando la sezione è visibile durante lo scroll su mobile
    const handleScroll = () => {
      if (window.innerWidth >= 768) return; // Solo per mobile
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
        
        setIsScrolledIntoView(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Controllo iniziale
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section 
      ref={sectionRef}
      className={`w-auto md:h-screen md:ml-72 mt-16 md:mt-8 md:pr-8 md:mb-16 ${className}`}
    >
      <a href={link} className="block w-full h-full">
        <div 
          className="w-full h-[100vh] md:h-full relative overflow-hidden md:mt-8 mb-16  "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={image}
            alt={title || "Progetto"}
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
          
          {/* Overlay che appare su hover (desktop) o scroll (mobile) */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-500 flex items-center justify-center 
              ${(isHovered || isScrolledIntoView) 
                ? 'opacity-50' 
                : 'opacity-0 md:opacity-0'}`}
          >
            <h2 
              className={`text-white text-xl md:text-2xl text-center px-6 transition-opacity duration-500 font-light tracking-[0.2em]
                ${(isHovered || isScrolledIntoView) 
                  ? 'opacity-100' 
                  : 'opacity-0'}`}
            >
              {title || "Progetto"}
            </h2>
          </div>
        </div>
      </a>
    </section>
  );
}
