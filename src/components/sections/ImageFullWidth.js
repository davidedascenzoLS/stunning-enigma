"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function ImageFullWidth({
  image,
  alt = "Background image"
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBxdWFsaXR5ID0gNzUK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgABQAFAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8/ooooA//9k=";

  return (
    <section className="w-full relative overflow-hidden p-4 md:p-8">
      <div className="w-full h-[30vh] md:h-[100vh] relative">

        {/* Skeleton loading */}
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse z-10" />
        )}

        {/* Error fallback */}
        {error && (
          <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
            <div className="text-center text-gray-400">
              <div className="text-2xl mb-2">🖼️</div>
              <div className="text-sm">Immagine non disponibile</div>
            </div>
          </div>
        )}

        {/* Immagine */}
        <Image
          src={image}
          alt={alt}
          fill
          className={`object-cover object-center transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
          quality={85}
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      </div>
    </section>
  );
}
