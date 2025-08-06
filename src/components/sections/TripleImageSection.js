"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function TripleImageSection({ images, titles, links, className }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrolledIndex, setScrolledIndex] = useState(null);
  const [imageStates, setImageStates] = useState(
    images?.slice(0, 3).map(() => ({ loaded: false, error: false })) || []
  );
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

  // ✅ OTTIMIZZAZIONE: Gestione loading e errori immagini
  const handleImageLoad = (index) => {
    setImageStates(prev => 
      prev.map((state, i) => 
        i === index ? { ...state, loaded: true, error: false } : state
      )
    );
  };

  const handleImageError = (index) => {
    setImageStates(prev => 
      prev.map((state, i) => 
        i === index ? { ...state, loaded: false, error: true } : state
      )
    );
  };

  // ✅ OTTIMIZZAZIONE: Placeholder blur data URL
  const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNzUK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgABQAFAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8/ooooA//9k=";

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
              {/* ✅ OTTIMIZZAZIONE: Loading placeholder */}
              {!imageStates[index]?.loaded && !imageStates[index]?.error && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse z-10" />
              )}

              {/* ✅ OTTIMIZZAZIONE: Error state */}
              {imageStates[index]?.error && (
                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
                  <div className="text-center text-gray-400">
                    <div className="text-2xl mb-2">🖼️</div>
                    <div className="text-sm">Image unavailable</div>
                  </div>
                </div>
              )}

              {/* ✅ OTTIMIZZATO: Immagine con tutte le caratteristiche originali + ottimizzazioni */}
              <Image
                src={image}
                alt={titles[index] || `Immagine ${index + 1}`}
                fill
                className={`object-cover object-center transition-all duration-500 hover:scale-105 ${
                  !imageStates[index]?.loaded ? 'opacity-0' : 'opacity-100'
                }`}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0} // ✅ MANTENUTO: priorità per la prima immagine
                
                // ✅ OTTIMIZZAZIONI AGGIUNTE:
                quality={index === 0 ? 85 : 80} // Prima immagine qualità più alta
                placeholder="blur"
                blurDataURL={blurDataURL}
                loading={index === 0 ? "eager" : "lazy"}
                
                onLoad={() => handleImageLoad(index)}
                onError={() => handleImageError(index)}
              />

              {/* Overlay (hover desktop / scroll mobile) - IDENTICO ALL'ORIGINALE */}
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