"use client";
import { useState, useEffect, useRef } from 'react';

export default function ImageCarouselWithThumbnails({ images, className, hoverImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [thumbnailsPosition, setThumbnailsPosition] = useState(0);
  const thumbnailsContainerRef = useRef(null);
  
  // Usa le stesse immagini per l'hover se non viene fornito un array separato
  const thumbnailHoverImages = hoverImages || images;

  // Gestisce la navigazione a un'immagine specifica
  const goToImage = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Gestisce la navigazione all'immagine precedente
  const goToPrevious = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToImage(newIndex);
  };

  // Gestisce la navigazione all'immagine successiva
  const goToNext = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToImage(newIndex);
  };

  // Scorrimento delle thumbnail a sinistra
  const scrollThumbnailsLeft = () => {
    if (!thumbnailsContainerRef.current) return;
    
    const container = thumbnailsContainerRef.current;
    const scrollAmount = container.clientWidth / 2;
    const newPosition = Math.max(thumbnailsPosition - scrollAmount, 0);
    setThumbnailsPosition(newPosition);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  // Scorrimento delle thumbnail a destra
  const scrollThumbnailsRight = () => {
    if (!thumbnailsContainerRef.current) return;
    
    const container = thumbnailsContainerRef.current;
    const scrollAmount = container.clientWidth / 2;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newPosition = Math.min(thumbnailsPosition + scrollAmount, maxScroll);
    setThumbnailsPosition(newPosition);
    container.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  // Gestisce la navigazione con tasti freccia
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, isTransitioning]);

  // Verifica che ci siano immagini da mostrare
  if (!images || images.length === 0) {
    return <div className="text-center p-6">Nessuna immagine disponibile</div>;
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Main Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg">
        {/* Main Image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/0 hover:bg-black/0 text-white hover:text-red-600 rounded-full p-2 z-20 transition-colors"
          aria-label="Precedente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/0 hover:bg-black/0 text-white hover:text-red-600 rounded-full p-2 z-20 transition-colors"
          aria-label="Successivo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/0 text-white/0 text-sm px-3 py-1 rounded-full z-20 md:block">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div className="relative w-full mt-4 rounded-md p-3">
        {/* Thumbnail navigation arrows */}
        <button
          onClick={scrollThumbnailsLeft}
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white text-black hover:text-red-600 rounded-md p-1 z-20 transition-colors hover:bg-white h-16"
          aria-label="Thumbnails precedenti"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollThumbnailsRight}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-black hover:text-red-600 rounded-md p-1 z-20 transition-colors hover:bg-white h-16"
          aria-label="Thumbnails successivi"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Thumbnails container */}
        <div 
          ref={thumbnailsContainerRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide px-10 py-3 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Duplicated the images to make navigation testing easier with only 3 images */}
          {[...images, ...images, ...images].map((image, index) => (
            <div
              key={index}
              onClick={() => goToImage(index % images.length)}
              className={`relative h-24 w-24 md:h-32 md:w-32 flex-shrink-0 overflow-hidden transition-transform cursor-pointer ${
                index % images.length === currentIndex ? 'transform scale-105 ' : ''
              }`}
            >
              {/* Default thumbnail image */}
              <img
                src={image}
                alt={`Thumbnail ${(index % images.length) + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{ opacity: index % images.length === currentIndex ? 1 : 0.7 }}
              />
              
              {/* Hover thumbnail image */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={thumbnailHoverImages[index % thumbnailHoverImages.length]}
                  alt={`Hover thumbnail ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Ho rimosso l'indicatore di bordo qui */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}