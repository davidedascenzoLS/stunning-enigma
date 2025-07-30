import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import PressImageSection from '@/components/sections/PressImageSection';

export default function SL96() {
  return (
    <div className="bg-white">
      {/* Navbar fissa */}
      <NavbarNew className="fixed top-0 z-50" />

      {/* Sezione immagini */}
      <div className="relative bg-white md:pl-64 mb-8">

    <PressImageSection
    imgLeft="/press/Thumbnails/cover1.webp"
    popupImgLeft="/press/01.webp"
    modeLeft="popup"

    imgRight="/press/Thumbnails/cover4.webp"
    popupImgRight="/press/04.webp"    
    modeRight="popup"
    />

    <PressImageSection
    imgLeft="/press/Thumbnails/cover3.webp"
    popupImgLeft="/press/03.webp"
    modeLeft="popup"

    imgRight="/press/Thumbnails/cover2.webp"
    popupImgRight="/press/02.webp" 
    modeRight="popup"
    />

    
    <PressImageSection
    imgLeft="/press/Thumbnails/cover5.webp"
    linkLeft="https://www.barchemagazine.com/laura-sessa/"
    modeLeft="link"

    imgRight="/press/Thumbnails/cover6.webp"
    popupImgRight="/press/05.webp" 
    modeRight="popup"
    newTabLeft={true}
    />


    <PressImageSection
    imgLeft="/press/Thumbnails/cover7.webp"
    popupImgLeft="/press/06.webp"
    modeLeft="popup"

    imgRight="/press/Thumbnails/cover8.webp"
    linkRight="https://www.edwardfields.com/designers/laura-sessa" 
    modeRight="link"
    newTabRight={true}
    />


    <PressImageSection
    imgLeft="/press/Thumbnails/cover9.webp"
    popupImgLeft="/press/07.webp"
    modeLeft="popup"

    imgRight="/press/Thumbnails/cover10.webp"
    popupImgRight="/press/08.webp"    
    modeRight="popup"
    />


    <PressImageSection
    imgLeft="/press/Thumbnails/cover11.webp"
    linkLeft="https://www.barchemagazine.com/laura-sessa/"
    modeLeft="link"

    imgRight="/press/Thumbnails/cover12.webp"
    popupImgRight="/press/09.png" 
    modeRight="popup"
    newTabLeft={true}
    />


    <PressImageSection
    imgLeft="/press/Thumbnails/cover14.webp"
    popupImgLeft="/press/10.webp"
    modeLeft="popup"

    imgRight="/press/Thumbnails/cover15.webp"
    popupImgRight="/press/13.webp"    
    modeRight="popup"
    />




      </div>
    </div>
  );
}
