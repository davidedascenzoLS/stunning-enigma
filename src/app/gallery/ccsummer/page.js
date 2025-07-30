import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function CCSummer() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Harrison Eidsgaard"
          completion="2019"
          services="Interior Design & FF&E"
          scale="95m | 312'6\"
          shipyard="Lürssen"        
        />
  
        <FullWidthCover
        image="/pj/ccsummer/Madsummer_Cover_Pj.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="MY CC-SUMMER (ex MADSUMMER) " 
          subtitle="Lurseen, 2019" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/ccsummer/1.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/ccsummer/2.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/ccsummer/3.webp"
            alt="Visual section"
            
          />

        <DoubleImageSection
            imgLeft="/pj/ccsummer/4.webp"
            imgRight="/pj/ccsummer/5.webp"
            
          />
          
        <ImageFullWidth
            image="/pj/ccsummer/6.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/ccsummer/7.webp"
            alt="Visual section"
            
          />

         
       </div>
      </div>
    );
  }