import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function SerenityJ() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Tim Heywood"
          completion="2014"
          services="Interior Design & FF&E"
          scale="55m I 180’5”"
          shipyard="Amels"        
        />
  
        <FullWidthCover
        image="/pj/serenityj/SerenityJ_Cover_Pj.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="MY SERENITY J " 
          subtitle="Amels, 2014" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/serenityj/1.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/serenityj/2.webp"
            alt="Visual section"
            
          />

         <SingleImageSection 
            image="/pj/serenityj/3.webp"
            position="right"
          />

        <ImageFullWidth
            image="/pj/serenityj/4.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/serenityj/5.webp"
            position="left"
          />

        <ImageFullWidth
            image="/pj/serenityj/6.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/serenityj/7.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/serenityj/8.webp"
            position="left"
          />



         
       </div>
      </div>
    );
  }