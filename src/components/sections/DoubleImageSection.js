"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function DoubleImageSection({ imgLeft, imgRight, className }) {
  const [leftLoaded, setLeftLoaded] = useState(false);
  const [leftError, setLeftError] = useState(false);
  const [rightLoaded, setRightLoaded] = useState(false);
  const [rightError, setRightError] = useState(false);

  const blurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA+..."; // puoi sostituirla con una tua blurDataURL reale

  const renderImage = (src, loaded, error, setLoaded, setError) => (
    <div className="w-full h-full relative overflow-hidden p-4 md:p-8">
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse z-10" />
      )}
      {error && (
        <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10 text-gray-400 text-sm">
          🖼️ Immagine non disponibile
        </div>
      )}
      <Image
        src={src}
        alt=""
        fill
        className={`object-cover object-center transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );

  return (
    <section className={`flex flex-col md:flex-row ${className}`}>
      <div className="w-full md:w-1/2 md:mb-0 h-[90vh] md:h-full">
        {renderImage(imgLeft, leftLoaded, leftError, setLeftLoaded, setLeftError)}
      </div>

      <div className="w-full md:w-1/2 h-[90vh] md:h-full">
        {renderImage(imgRight, rightLoaded, rightError, setRightLoaded, setRightError)}
      </div>
    </section>
  );
}
