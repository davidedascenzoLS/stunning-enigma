import Image from 'next/image';

export default function FullWidthCoverStudio({
  image,
  alt = "Cover image",
}) {
  return (
    <section className="w-full relative overflow-hidden md:mt-0 md:pl-64">
      <div className="w-full h-[30vh] md:h-[100vh] relative">
        <Image
          src={image}
          alt={alt}
          fill // usa fill per coprire tutto il div genitore
          className="object-cover object-center"
          sizes="100vw"
          priority={true}
        />
      </div>
    </section>
  );
}
