import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function ChopiChopi() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Zuccon International Project"
          completion="2013"
          services="Interior Design & FF&E"
          scale="80m I 262’5”"
          shipyard="CRN"        
        />
  
        <FullWidthCover
        image="/pj/chopichopi/ChopiChopi_Cover_Pj.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
          <Title 
            title="MY CHOPI CHOPI " 
            subtitle="CRN, 2013" 
            align="left"
          />

          <ImageFullWidth
            image="/pj/chopichopi/1.webp"
            alt="Visual section"
            height="80vh"
          />

          <DoubleImageSection
            imgLeft="/pj/chopichopi/2.webp"
            imgRight="/pj/chopichopi/3.webp"
          />

          <ImageFullWidth
            image="/pj/chopichopi/4.webp"
            alt="Visual section"
            height="80vh"
          />

          <ImageFullWidth
            image="/pj/chopichopi/5.webp"
            alt="Visual section"
            height="80vh"
          />

          <ImageFullWidth
            image="/pj/chopichopi/6.webp"
            alt="Visual section"
            height="80vh"
          />
          
          

         
       </div>
      </div>
    );
  }