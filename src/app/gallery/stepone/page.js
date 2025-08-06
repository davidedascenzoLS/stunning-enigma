import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function StepOne() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Tim Heywood"
          completion="2012"
          services="Interior Design & FF&E"
          scale="60m I 196’10”"
          shipyard="Amels"        
        />
  
        <FullWidthCover
        image="/pj/stepone/Step.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="MY STEP ONE " 
          subtitle="Amels, 2012" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/stepone/1.webp"
            alt="Visual section"
            
          />

          <DoubleImageSection
            imgLeft="/pj/stepone/2.webp"
            imgRight="/pj/stepone/3.webp"
                      
          />

        <ImageFullWidth
            image="/pj/stepone/4.webp"
            alt="Visual section"
            
          />

        <DoubleImageSection
            imgLeft="/pj/stepone/5.webp"
            imgRight="/pj/stepone/6.webp"
                      
          />



        


         
       </div>
      </div>
    );
  }