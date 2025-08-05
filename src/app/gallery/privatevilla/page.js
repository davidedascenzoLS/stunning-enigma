import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeaderresidential from '@/components/sections/ProjectHeaderresidential';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function PrivateVilla() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeaderresidential
          location="Monaco"
          completion="2014"
          services="Interior Design & FF&E"
          scale="700sqm"
                 
        />
  
         
        <FullWidthCover
          image="/pj/privatevilla/VBR_Cover_Pj.jpg"
          alt="Visual section"
          
        />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="PRIVATE VILLA" 
          subtitle="Monaco, 2014" 
          align="left"
        />

        <DoubleImageSection
          imgLeft="/pj/privatevilla/1.webp"
          imgRight="/pj/privatevilla/2.webp"
                    
        />

        <SingleImageSection 
            image="/pj/privatevilla/3.webp"
            position="left"
        />

        <SingleImageSection 
            image="/pj/privatevilla/4.webp"
            position="right"
        />

        <DoubleImageSection
          imgLeft="/pj/privatevilla/5.webp"
          imgRight="/pj/privatevilla/6.webp"
                    
        />


         
       </div>
      </div>
    );
  }