import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCover from '@/components/sections/FullWidthCover';
import ProjectHeader from '@/components/sections/ProjectHeader';  
import Title from '@/components/sections/Title';
import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';


export default function Casalvecchio() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

  
        <FullWidthCover
        image="/pj/casalvecchio/1.webp"
        alt="Visual section"
        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        
        <Title 
          title="CASALVCECCHIO" 
          subtitle="17th Century Residence" 
          align="left"
        />

        <SingleImageSection 
            image="/pj/casalvecchio/2.webp"
            position="left"
        />

        <SingleImageSection 
            image="/pj/casalvecchio/3.webp"
            position="right"
        />

        <ImageFullWidth
            image="/pj/casalvecchio/4.webp"
            alt="Visual section"
            
          />

        <DoubleImageSection
            imgLeft="/pj/casalvecchio/5.webp"
            imgRight="/pj/casalvecchio/6.webp"
                      
        />

        <ImageFullWidth
            image="/pj/casalvecchio/7.webp"
            alt="Visual section"
            
          />

         <SingleImageSection 
            image="/pj/casalvecchio/8.webp"
            position="left"
          />





         
       </div>
      </div>
    );
  }