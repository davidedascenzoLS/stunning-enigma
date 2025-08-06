"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function ImageTextSectionHome({
  image,
  title,
  subtitle,
  text,
  reverse = false,
  bgColor = "bg-white",
  textColor = "text-gray-800"
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNzUK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgABQAFAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8/ooooA//9k=";

  return (
    <section className={`${bgColor} min-h-screen flex items-stretch`}>
      <div className={`flex flex-col md:flex-row w-full ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Sezione Testo */}
        <div className="w-full md:w-1/2 p-6 md:p-16 pt-24 pb-24 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto">
            <h1 className={`${textColor} text-xl md:text-xl font-thin pb-3 pl-3 tracking-[0.2em]`}>
              {subtitle}
            </h1>
            <h2 className={`${textColor} text-3xl md:text-4xl font-thin pb-6 pl-3 tracking-[0.2em]`}>
              {title}
            </h2>
            <p className={`${textColor} text-base md:text-xl font-thin leading-relaxed opacity-90`}>
              {text}
            </p>
          </div>
        </div>

        {/* Sezione Immagine */}
        <div className="w-full md:w-1/2 relative h-[90vh] md:h-auto">
          <div className="h-full w-full p-4 md:p-8">
            <div className="h-full w-full relative overflow-hidden">
              {!loaded && !error && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse z-10" />
              )}

              {error && (
                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
                  <div className="text-center text-gray-400">
                    <div className="text-2xl mb-2">🖼️</div>
                    <div className="text-sm">Image unavailable</div>
                  </div>
                </div>
              )}

              <Image
                src={image}
                alt="Descrizione sezione"
                fill
                className={`object-cover object-center transition-opacity duration-500 ${
                  loaded ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                placeholder="blur"
                blurDataURL={blurDataURL}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
