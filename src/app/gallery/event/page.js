import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function Event() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Tim Heywood"
          completion="2013"
          services="Interior Design & FF&E"
          scale="62,4m I 204’8"
          shipyard="Amels"        
        />
  
        <FullWidthCover
        image="/pj/event/Ev.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="MY EVENT " 
          subtitle="Amels, 2013" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/event/1.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/event/2.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/event/3.webp"
            position="right"
        />

        <ImageFullWidth
            image="/pj/event/4.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/event/5.webp"
            position="left"
        />  

        <SingleImageSection 
            image="/pj/event/6.webp"
            position="right"
        />  


          
        <ImageFullWidth
            image="/pj/event/7.webp"
            alt="Visual section"
            
          />


         
       </div>
      </div>
    );
  }