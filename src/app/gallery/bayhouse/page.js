import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeaderresidential from '@/components/sections/ProjectHeaderresidential';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function Bayhouse() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeaderresidential
          location="Monaco"
          completion="2024"
          services="Interior Design & FF&E"
          scale="59 Apartments + 5 Villas"
                 
        />
  
  <div className=" h-screen sticky top-0 ">
        <video
          className="w-full h-full object-cover absolute top-0 left-0"
          src="/pj/bayhouse/BayHouse.mp4"
          autoPlay
          muted
          loop
          playsInline 
        />

</div>

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="BAYHOUSE TESTIMONIO " 
          subtitle="Monaco, 2024" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/bayhouse/1.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/bayhouse/2.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/bayhouse/3.webp"
            position="left"
        />

        <ImageFullWidth
            image="/pj/bayhouse/4.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/bayhouse/5.webp"
            position="right"
        />

    
        <ImageFullWidth
            image="/pj/bayhouse/6.webp"
            alt="Visual section"
            
        />

        <SingleImageSection 
            image="/pj/bayhouse/7.webp"
            position="left"
        />

        <SingleImageSection 
            image="/pj/bayhouse/8.webp"
            position="right"
        />

        <ImageFullWidth
            image="/pj/bayhouse/9.webp"
            alt="Visual section"
            
          />

         
       </div>
      </div>
    );
  }