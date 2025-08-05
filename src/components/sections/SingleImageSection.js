import Image from 'next/image';

export default function SingleImageSection({ 
  image, 
  position = "left", // "left" o "right"
  className
}) {
  return (
    <section className={`flex flex-col md:flex-row ${className}`}>
      {/* Immagine a sinistra e spazio vuoto a destra */}
      {position === "left" && (
        <>
          {/* Metà sinistra con immagine */}
          <div className="w-full md:w-1/2 md:mb-0 h-[90vh] md:h-full relative overflow-hidden">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover object-center p-4 md:p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
          </div>

          {/* Metà destra vuota */}
          <div className="hidden md:block md:w-1/2 h-[90vh] md:h-full">
            {/* Spazio vuoto */}
          </div>
        </>
      )}

      {/* Spazio vuoto a sinistra e immagine a destra */}
      {position === "right" && (
        <>
          {/* Metà sinistra vuota */}
          <div className="hidden md:block md:w-1/2 h-[90vh] md:h-full">
            {/* Spazio vuoto */}
          </div>

          {/* Metà destra con immagine */}
          <div className="w-full md:w-1/2 h-[90vh] md:h-full relative overflow-hidden">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover object-center p-4 md:p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={true}
            />
          </div>
        </>
      )}
    </section>
  );
}
