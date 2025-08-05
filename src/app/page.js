import Image from "next/image";  // IMPORT
import NavbarNew from "../components/NavbarNew";
import DoubleImageSection from "../components/sections/DoubleImageSection";
import ImageTextSection from "../components/sections/ImageTextSection";
import ImageFullWidth from "../components/sections/ImageFullWidth";
import ScrollDownButton from "../components/sections/ScrollDownButton";
import ImageTextSectionHome from "@/components/sections/ImageTextSectionHome";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <NavbarNew className="fixed top-0 z-50" />

      <div className="h-screen sticky top-0 z-20 relative">
        <video
          className="w-full h-full object-cover absolute top-0 left-0"
          src="https://res.cloudinary.com/dvtbwrika/video/upload/v1753794720/thumbnail_cyp3pf.mp4"
          autoPlay
          muted
          loop
          playsInline 
        />

        <div className="absolute inset-0 top-0 z-30 flex justify-center md:hidden relative">
          <Image 
            src="/logo/Logo_LS.svg"
            alt="LS Platform Logo"
            width={300}         // esempio larghezza
            height={270}        // esempio altezza (approssimativa 9/10 altezza)
            className="drop-shadow-lg animate-fade-in"
            priority={true}     // per caricare subito
          />
        </div>
      </div>

      <ScrollDownButton />

      <div className="relative z-40 bg-white mt-[100vh] md:pl-64 pb-24 md:pt-8"> 
        <div id="first-section">
          <ImageTextSectionHome
            image="/images/Try_1.webp"
            subtitle="The Architect"
            title="Laura Sessa"
            text="Architect Laura Sessa is a prominent figure in superyacht interior design, known for her refined and personalized approach. 
            Her career began alongside Alberto Pinto, a collaboration that enriched her sensitivity to harmony and luxury in spaces. A distinctive feature of Sessa’s work is her love for color, which she considers the starting point of every project. For her, color is an essential expressive tool that defines the atmosphere and personality of spaces. The Architect adopts a collaborative approach with her clients, firmly believing that design should emerge from con- stant dialogue. She never imposes a vision but rather guides the owner through a creative process leading to tailor-made solutions where functionality and aesthetics blend seamlessly. Every decorative element is designed to also have a practical function, creating spaces that are both beautiful and useful. Customization is the foundation of Laura Sessa’s philosophy: every detail, from materials to colors, is carefully selected to reflect the client’s needs and desires. 
            In this way, Sessa’s design not only meets but exceeds expectations, offering a unique and personalized experience in every project."
            reverse={false}
            bgColor="bg-white"
            textColor="text-grey-800"
          />
        </div>

        <ImageFullWidth
          image="/images/Try_4.webp"
          alt="Visual section"
          height="100vh"
        />

        <ImageTextSection
          image="/images/Try_3.webp"
          title="Welcome to The Studio"
          text="Our studio is synonymous with excellence in creating unique, bespoke spaces for each client. 
          With a sophisticated vision and extensive experience in luxury design, we transform spaces into works of art where aesthetics and functionality blend seamlessly."
          reverse={true}
          bgColor="bg-white"
          textColor="text-grey-800"
          font-family="font-serif"
        />  

        <ImageFullWidth
          image="/images/Try_5.webp"
          alt="Visual section"
          height="100vh"
        />
        
        <ImageTextSection
          image="/images/Try_2.webp"
          title="Our Philosophy"
          text="Every project is born through color, the guiding thread that defines the essence of a space. 
          We believe design stems from a deep and continuous dialogue with our clients, leading them on a creative journey toward tailor-made solutions where beauty and practicality coexist with natural elegance."
          reverse={true}
          bgColor="bg-white"
          textColor="text-grey-800"
          font-family="font-serif"
        />
      </div>
    </div>
  );
}
