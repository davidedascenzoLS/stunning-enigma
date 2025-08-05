"use client";
import Image from 'next/image';

export default function ImageFullWidth({
  image,
  alt = "Background image"
}) {
  return (
    <section className="w-full relative overflow-hidden p-4 md:p-8">
      <div className="w-full h-[30vh] md:h-[100vh] relative">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
