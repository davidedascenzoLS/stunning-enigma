export default function FullWidthTextSection({ 
    title, 
    subtitle, 
    text, 
    bgColor = "bg-white", 
    textColor = "text-gray-800",
    marginX = "mx-auto max-w-7xl" // Parametro per controllare i margini laterali
  }) {
    return (
      <section className={`${bgColor} min-h-screen flex items-center py-16`}>
        <div className={`w-full ${marginX} px-6 md:px-16`}>
          <div className="max-w-4xl">
            <h1 className={`${textColor} text-xl md:text-xl font-thin pb-3 pl-3 tracking-[0.2em]`}>
              {subtitle}
            </h1>
            <h2 className={`${textColor} text-3xl md:text-4xl font-thin pb-6 pl-3 tracking-[0.2em]`}>
              {title}
            </h2>
            <p className={`${textColor} text-base md:text-xl font-thin leading-relaxed opacity-90`}>
              {text}
            </p>
          </div>
        </div>
      </section>
    );
  }