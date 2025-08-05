"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function TripleImageSection({ images, titles, links, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolledIndex, setScrolledIndex] = useState(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2;

        if (isVisible) {
          setScrolledIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <section className={`flex flex-col md:flex-row md:h-screen md:pl-64 md:pr-8 ${className}`}>
      {images.slice(0, 3).map((image, index) => (
        <div
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="w-full md:w-1/3 h-[90vh] md:h-screen pt-16 md:pt-8 md:pr-0 md:pl-8"
        >
          <a href={links[index]} className="block w-full h-full">
            <div
              className="w-full h-full relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={image}
                alt={titles[index] || `Immagine ${index + 1}`}
                fill
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0} // priorità per la prima immagine
              />

              {/* Overlay (hover desktop / scroll mobile) */}
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 flex items-center justify-center
                  ${(hoveredIndex === index || scrolledIndex === index)
                    ? 'opacity-50'
                    : 'opacity-0 md:opacity-0'}`}
              >
                <h3
                  className={`text-white text-base md:text-2xl text-center px-4 transition-opacity duration-500 font-light tracking-[0.2em]
                    ${(hoveredIndex === index || scrolledIndex === index)
                      ? 'opacity-100'
                      : 'opacity-0'}`}
                >
                  {titles[index] || `Progetto ${index + 1}`}
                </h3>
              </div>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
