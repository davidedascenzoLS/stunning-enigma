import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';
import Image from 'next/image'


export default function MadameKate() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Tim Heywood"
          completion="2015"
          services="Interior Design & FF&E"
          scale="62m I 203’5”"
          shipyard="Amels"        
        />
  
        <FullWidthCover
        image="/pj/madamekate/MadameKate_Cover_Pj.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="MY MADAME KATE " 
          subtitle="Amels, 2016" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/madamekate/1.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/madamekate/2.webp"
            alt="Visual section"
            
          />

         <SingleImageSection 
            image="/pj/madamekate/3.webp"
            position="right"
          />

        <ImageFullWidth
            image="/pj/madamekate/4.webp"
            alt="Visual section"
            
          />



         
       </div>
      </div>
    );
  }