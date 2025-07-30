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
            <div className="w-full md:w-1/2 md:mb-0">
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover object-center p-4 md:p-8"
                />
              </div>
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
            <div className="w-full md:w-1/2 h-[90vh] md:h-full">
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover object-center p-4 md:p-8"
                />
              </div>
            </div>
          </>
        )}
      </section>
    );
  }