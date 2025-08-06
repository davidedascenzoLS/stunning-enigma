"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function FullWidthCoverStudio({
  image,
  alt = "Cover image",
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+..."; // Sostituisci con la tua blur base64

  return (
    <section className="w-full relative overflow-hidden md:mt-0 md:pl-64">
      <div className="w-full h-[30vh] md:h-[100vh] relative">
        {!loaded && !error && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse z-10" />
        )}
        {error && (
          <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10 text-gray-400 text-sm">
            🖼️ Immagine non disponibile
          </div>
        )}
        <Image
          src={image}
          alt={alt}
          fill
          className={`object-cover object-center transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      </div>
    </section>
  );
}
