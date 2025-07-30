import React from 'react';
import NavbarNew from '@/components/NavbarNew';
import ImageFullWidth from '@/components/sections/ImageFullWidth';
import FullWidthCoverStudio from '@/components/sections/FullWidthCoverStudio';
import ImageTextSection from '@/components/sections/ImageTextSection';

import DoubleImageSection from '@/components/sections/DoubleImageSection';
import SingleImageSection from '@/components/sections/SingleImageSection';
import FullWidthTextSection from '@/components/sections/FullWidthTextSection';


export default function Studio() {
    return (
      
      <div className="bg-white ">
  
  
        
        <NavbarNew className="fixed top-0 z-50" />

  
        <FullWidthCoverStudio
        image="/studio/1.webp"
        alt="Visual section"

        
      />   

        
<div className="relative bg-white md:pl-64 mb-8"> 
        

        <FullWidthTextSection
          subtitle="Casalvecchio"
          title="Our Studio"
          text="At the forefront of luxury interior design, our studio represents excellence in the creation of refined, bespoke spaces. Built on the expertise and vision of highly skilled professionals, we are dedicated to transforming each project into a unique masterpiece where aesthetics and functionality exist in perfect harmony. Our philosophy is rooted in a tailored approach, where every detail is carefully conceived and crafted to meet the client’s needs and desires. We believe that interior design is a journey, a creative process that begins with an idea and evolves through ongoing collaboration with our clients. Each space thus becomes an extension of their personality, an environment that not only reflects their lifestyle but enhances it. What sets us apart is our mastery of color, which we consider the cornerstone of every project. With a profound understanding of hues and their interplay with light and materials, we create atmospheres that evoke emotion and captivate the senses. We work closely with experienced artisans, selecting only the highest quality materials to ensure impeccable and enduring results. Every project celebrates bespoke design, exceeding expectations through meticulous attention to detail, innovation, and a commitment to client care. Whether it’s private residences, luxury yachts, or commercial spaces, our studio offers customized solutions that reflect an innate sense of luxury and sophistication. Each project is unique, crafted to create an experience that seamlessly blends functionality and beauty in an extraordinarily harmonious way."
          bgColor="bg-white" // opzionale
          textColor="text-gray-800" // opzionale
          marginX="mx-4 md:mx-[45vh]" // opzionale: per controllare i margini laterali
        />

        <ImageFullWidth
            image="/studio/2.webp"
            alt="Visual section"
            
          />

        <ImageTextSection
          image="/studio/3.webp"
          title="The Essence of Color"
          text="Every element, every material, and every color palette is carefully selected to express our clients’ most intimate desires. Our goal is always to exceed expectations, offering unique sensory experiences through spaces that celebrate luxury and custom-made comfort."
          reverse={true}
          bgColor="bg-white"
          textColor="text-grey-800"
          font-family="font-serif"
        />  


        <ImageFullWidth
            image="/studio/4.webp"
            alt="Visual section"
            
          />

        <ImageTextSection
          image="/studio/5.webp"
          title="A Creative Collaboration"
          text="Every project is born through color, the guiding thread that defines the essence of a space. We believe design stems from a deep and continuous dialogue with our clients, leading them on a creative journey toward tailor-made solutions where beauty and practicality coexist with natural elegance."
          reverse={true}
          bgColor="bg-white"
          textColor="text-grey-800"
          font-family="font-serif"
        />    

        <ImageTextSection
          image="/studio/6.webp"
          title="Bespoke Design"
          text="Our approach is based on listening and sharing: we never impose a vision but rather act as guides in a creative process, where the client’s ideas come to life. Each project becomes an authentic reflection of their personality, where refinement, functionality, and originality harmoniously unite."
          reverse={false}
          bgColor="bg-white"
          textColor="text-grey-800"
          font-family="font-serif"
        />   

         
       </div>
      </div>
    );
  }