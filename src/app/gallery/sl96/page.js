import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function SL96() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

        <ProjectHeader
          exterior="Francesco Paszkowski"
          completion="2020"
          services="Interior Design & FF&E"
          scale="29,6m I 97’"
          shipyard="San Lorenzo Shipyard"        
        />
  
        <FullWidthCover
        image="/pj/sl96/SL96_Cover_Pj.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="SL 96/A " 
          subtitle="San Lorenzo Shipyard , 2020" 
          align="left"
        />

        <ImageFullWidth
            image="/pj/sl96/1.webp"
            alt="Visual section"
            
          />

        <SingleImageSection 
            image="/pj/sl96/2.webp"
            position="right"
          />

        <ImageFullWidth
            image="/pj/sl96/3.webp"
            alt="Visual section"
            
          />

        <ImageFullWidth
            image="/pj/sl96/4.webp"
            alt="Visual section"
            
          />  

         <SingleImageSection 
            image="/pj/sl96/5.webp"
            position="right"
          />

         
       </div>
      </div>
    );
  }