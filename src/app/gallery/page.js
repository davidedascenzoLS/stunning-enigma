import Navbar from "../../components/NavbarNew";
import TripleImageSection from "../../components/sections/TripleImageSection";
import FullWidthSection from "../../components/sections/FullWidthSection";


export default function Gallery() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
    <TripleImageSection 
        images={[
            '/gallery/Madsummer.webp', 
            '/gallery/MadameKate.webp',
            '/gallery/Chopi.webp' 
            
        ]}
        titles={[
            'MY CC-Summer', 
            'MY Madame Kate', 
            'MY Chopi Chopi'
        ]}
        links={[
            '/gallery/ccsummer',
            '/gallery/madamekate',
            '/gallery/chopichopi' 
        
        ]}
        className="my-custom-class"
        />

    <TripleImageSection 
        images={[
            '/gallery/Time0.webp', 
            '/gallery/Testimonio.webp', 
            '/gallery/VBR.webp'
        ]}
        titles={[
            'Project Time Zero', 
            'Bayhouse Testimonio', 
            'Private Villa'
        ]}
        links={[
            '/gallery/timezero', 
            '/gallery/bayhouse', 
            '/gallery/privatevilla'
        ]}
        className="my-custom-class"
        />

    <TripleImageSection 
        images={[
            '/gallery/Event.webp', 
            '/gallery/Step1.webp', 
            '/gallery/Galene.webp'
        ]}
        titles={[
            'MY Event', 
            'MY Step One', 
            'MY Galene'
        ]}
        links={[
            '/gallery/event', 
            '/gallery/stepone', 
            '/gallery/galene'
        ]}
        className="my-custom-class"
        />

    <TripleImageSection 
        images={[
            '/gallery/Mimtee.webp', 
            '/gallery/SL96.webp', 
            '/gallery/SerenityJ.webp'
        ]}
        titles={[
            'MY Mimtee', 
            'MY SL 96 A', 
            'MY Serenity J'
        ]}
        links={[
            '/gallery/mimtee', 
            '/gallery/sl96', 
            '/gallery/serenityj'
        ]}
        className="my-custom-class"
        />

    <FullWidthSection 
        image="/gallery/Casalvecchio.webp"
        title="Casalvecchio"
        link="/gallery/casalvecchio"
        className="my-custom-class"
        />



    </div>
  );
}