"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function SingleImageSection({ 
  image, 
  position = "left",
  className
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+..."; // puoi sostituirla con una tua blurDataURL reale

  const ImageBlock = (
    <div className="w-full md:w-1/2 h-[90vh] md:h-full relative overflow-hidden">
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
        alt=""
        fill
        className={`object-cover object-center p-4 md:p-8 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );

  const EmptyBlock = (
    <div className="hidden md:block md:w-1/2 h-[90vh] md:h-full"></div>
  );

  return (
    <section className={`flex flex-col md:flex-row ${className}`}>
      {position === "left" ? (
        <>
          {ImageBlock}
          {EmptyBlock}
        </>
      ) : (
        <>
          {EmptyBlock}
          {ImageBlock}
        </>
      )}
    </section>
  );
}
