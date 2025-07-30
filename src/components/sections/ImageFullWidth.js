"use client"

export default function ImageFullWidth({
  image,
  alt = "Background image"
}) {
  return (
    <section className="w-full relative overflow-hidden p-4 md:p-8 ">
      <div className="w-full h-[30vh] md:h-[100vh]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}