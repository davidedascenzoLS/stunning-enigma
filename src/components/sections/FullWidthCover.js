import Image from 'next/image'
export default function FullWidthCover({
  image,
  alt = "Cover image",
  
}) {
  return (
    <section className="w-full relative overflow-hidden mt-16 md:mt-0 md:pl-64">
      <div className="w-full h-[30vh] md:h-[83vh]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}