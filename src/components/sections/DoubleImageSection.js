import Image from 'next/image';

export default function DoubleImageSection({ imgLeft, imgRight, className }) {
  return (
    <section className={`flex flex-col md:flex-row ${className}`}>
      
      {/* Metà sinistra */}
      <div className="w-full md:w-1/2 md:mb-0">
        <div className="w-full h-full relative overflow-hidden p-4 md:p-8">
          <Image
            src={imgLeft}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      
      {/* Metà destra */}
      <div className="w-full md:w-1/2 h-[90vh] md:h-full">
        <div className="w-full h-full relative overflow-hidden p-4 md:p-8">
          <Image
            src={imgRight}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

    </section>
  );
}
