export default function DoubleImageSection({ imgLeft, imgRight, className }) {
  return (
    <section className={`flex flex-col md:flex-row ${className}`}>
      {/* Metà sinistra */}
      <div className="w-full md:w-1/2 md:mb-0">
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={imgLeft}
            alt=""
            className="w-full h-full object-cover object-center p-4 md:p-8"
          />
        </div>
      </div>
      
      {/* Metà destra */}
      <div className="w-full md:w-1/2 h-[90vh] md:h-full ">
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={imgRight}
            alt=""
            className="w-full h-full object-cover object-center p-4 md:p-8"
          />
        </div>
      </div>
    </section>
  );
}