import Navbar from "../../components/NavbarNew";
import TripleImageSection from "../../components/sections/TripleImageSection";
import FullWidthSection from "../../components/sections/FullWidthSection";


export default function Gallery() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
    <TripleImageSection 
        images={[
            '/gallery/Madsummer_Cover_b.webp', 
            '/gallery/MadameKate_Cover_b.webp',
            '/gallery/ChopiChopi_Cover_b.webp' 
            
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
            '/gallery/Time0_Cover_b.webp', 
            '/gallery/Testimonio_Cover_b.webp', 
            '/gallery/VillaBelRespiro_Cover_b.webp'
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
            '/gallery/Event_Cover_b.webp', 
            '/gallery/StepOne_Cover_b.webp', 
            '/gallery/Galene_Cover_b.webp'
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
            '/gallery/Mimtee_Cover_b.webp', 
            '/gallery/SL96_Cover_b.webp', 
            '/gallery/SerenityJ_Cover_b.webp'
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
        image="/gallery/Casalvecchio_Cover_b.webp"
        title="Casalvecchio"
        link="/gallery/casalvecchio"
        className="my-custom-class"
        />



    </div>
  );
}