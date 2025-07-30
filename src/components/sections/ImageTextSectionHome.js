export default function ImageTextSectionHome({ image, title, subtitle , text, reverse = false, bgColor = "bg-white", textColor = "text-gray-800" }) {
  return (
    <section className={`${bgColor} min-h-screen flex items-stretch`}>

      <div className={`flex flex-col md:flex-row w-full  ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Sezione Testo */}
        <div  className="w-full md:w-1/2 p-6 md:p-16 pt-24 pb-24 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto">
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

        {/* Sezione Immagine */}
        <div className="w-full md:w-1/2 relative h-[90vh] md:h-auto">
          <div className="h-full w-full p-4 md:p-8 ">
            <div className="h-full w-full relative overflow-hidden">
              <img
                src={image}
                alt="Descrizione sezione"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}