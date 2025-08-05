import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCoverStudio from '@/components/sections/FullWidthCoverStudio';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function TimeZero() {
    return (
      

      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />


  
        <FullWidthCoverStudio
        image="/pj/timezero/Cover_TimeZero_Pj.jpg"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="PROJECT TIME ZERO " 
          subtitle="Oceanco, 2022" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/timezero/1.webp"
            alt="Visual section"
            
        />

        <ImageFullWidth
            image="/pj/timezero/2.webp"
            alt="Visual section"
            
        />

        <ImageFullWidth
            image="/pj/timezero/3.webp"
            alt="Visual section"
            
        />

        <DoubleImageSection
            imgLeft="/pj/timezero/4.webp"
            imgRight="/pj/timezero/5.webp"
            
        />
          
        <ImageFullWidth
            image="/pj/timezero/6.webp"
            alt="Visual section"
            
        />

       </div>
      </div>
    );
  }