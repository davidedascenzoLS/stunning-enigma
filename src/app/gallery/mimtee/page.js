import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function Mimtee() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Zuccon"
          completion="2010"
          services="Interior Design & FF&E"
          scale="60m I 196’10”"
          shipyard="CRN"        
        />
  
        <FullWidthCover
        image="/pj/mimtee/Mimtee_Cover_Pj.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="MY MY MIMTEE" 
          subtitle="CRN, 2013" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/mimtee/1.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/mimtee/2.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/mimtee/3.webp"
            position="right"
        />

        <ImageFullWidth
            image="/pj/mimtee/4.webp"
            alt="Visual section"
            
        />

        <SingleImageSection 
            image="/pj/mimtee/5.webp"
            position="left"
        />  

          
        <ImageFullWidth
            image="/pj/mimtee/6.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/mimtee/7.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/mimtee/8.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/mimtee/9.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/mimtee/10.webp"
            alt="Visual section"
            
          />  

         
       </div>
      </div>
    );
  }