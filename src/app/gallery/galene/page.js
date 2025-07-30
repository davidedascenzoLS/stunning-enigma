import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function Galene() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Tim Heywood"
          completion="2020"
          services="Interior Design & FF&E"
          scale="55m I 180’5”"
          shipyard="Amels"        
        />
  
        <FullWidthCover
        image="/pj/galene/Galene_Cover_Pj.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="MY GALENE " 
          subtitle="Lurseen, 2019" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/galene/1.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/galene/2.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/galene/3.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/galene/4.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/galene/5.webp"
            alt="Visual section"
            
          />

         
       </div>
      </div>
    );
  }