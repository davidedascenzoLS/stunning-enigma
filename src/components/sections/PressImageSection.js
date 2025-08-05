"use client";
import Image from 'next/image';
import { useState } from "react";
import { X } from "lucide-react";

export default function PressImageSection({
  imgLeft,
  popupImgLeft,
  modeLeft = "popup",
  linkLeft = "",
  newTabLeft = false,
  
  imgRight,
  popupImgRight,
  modeRight = "popup",
  linkRight = "",
  newTabRight = false,
  
  className,
}) {
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageUrl) => {
    setPopupImage(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupImage(null);
    document.body.style.overflow = "";
  };

  const renderImage = ({ imgSrc, popupImg, mode, link, newTab }) => {
    const imageElement = (
      <div className="relative w-full h-full aspect-[3/4] group">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover object-center p-4 md:p-8"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-200"></div>
      </div>
    );

    if (mode === "link") {
      return (
        <a
          href={link}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
          className="block w-full h-full relative overflow-hidden cursor-pointer"
        >
          {imageElement}
        </a>
      );
    }

    return (
      <div
        className="w-full h-full relative overflow-hidden cursor-pointer"
        onClick={() => openPopup(popupImg)}
      >
        {imageElement}
      </div>
    );
  };

  return (
    <>
      {/* Sezione immagini */}
      <section
        className={`flex flex-col md:flex-row transition duration-300 ${className} ${
          popupImage ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Immagine sinistra */}
        <div className="w-full md:w-1/2">
          {renderImage({
            imgSrc: imgLeft,
            popupImg: popupImgLeft,
            mode: modeLeft,
            link: linkLeft,
            newTab: newTabLeft,
          })}
        </div>

        {/* Immagine destra */}
        <div className="w-full md:w-1/2">
          {renderImage({
            imgSrc: imgRight,
            popupImg: popupImgRight,
            mode: modeRight,
            link: linkRight,
            newTab: newTabRight,
          })}
        </div>
      </section>

      {/* Popup */}
      {popupImage && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-start p-8 backdrop-blur-md bg-white/80 overflow-y-auto"
          onClick={closePopup}
        >
          <div className="relative w-full flex justify-center">
            <button
              onClick={closePopup}
              className="absolute top-0 right-0 m-4 text-black hover:text-red-600 z-50"
            >
              <X size={28} />
            </button>
            <div className="relative w-[60vw] h-auto aspect-auto">
              <Image
                src={popupImage}
                alt="Popup"
                fill
                className="object-contain"
                sizes="60vw"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
