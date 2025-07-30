"use client";
import Navbar from "../../components/NavbarNew";
import Head from 'next/head';
import Carousel from '../../components/eshop/Carousel';
import NavBarE from '../../components/eshop/NavBarE';
import BreadCrumbs from '../../components/eshop/BreadCrumbs';
import Title from '../../components/eshop/ProductTitle';
import Details from '../../components/eshop/ProductDetail';
import Button from '../../components/eshop/ContactButton';
import Navigation from '../../components/eshop/ProductNavigation';
import ColorSelector from '../../components/eshop/ColorSelector';

export default function EshopPage() {
  // Dati di esempio per un prodotto di interior design
  const product = {
    name: "Lorem Ipsium",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim sapien non justo convallis, quis gravida nunc blandit. Proin sapien lorem, consequat consequat congue nec, dignissim vel nisl. Sed sit amet tellus placerat, venenatis est sed, accumsan ex. Proin viverra enim ac velit vestibulum, ac ultricies mi posuere. Phasellus ultricies rhoncus semper. Fusce elementum dolor eget elit ornare bibendum. Mauris eu odio mi.Poltrona lounge contemporanea con linee pulite e comfort impareggiabile. Perfetta per dare un tocco di eleganza a qualsiasi ambiente.",
    dimensions: "L: 00cm × P: 00cm × H: 00cm",
    colors: [
      { name: "Grigio Chiaro", value: "#000000" },
      { name: "Blu Navy", value: "#000000" },
      { name: "Verde Salvia", value: "#000000" },
      { name: "Beige", value: "#000000" }
    ],
    
    images: [
      "/carousel/45.jpg",
      "/carousel/aperto.jpg",
      "/carousel/frontale.jpg"
    ],
    hoverImages: [
      "/carousel/frontale.jpg",
      "/carousel/frontale.jpg",
      "/carousel/45.jpg"
    ],
    categories: ["Salotto", "Sedute", "Poltrone"]
  };

  const handleColorSelect = (colorIndex) => {
    console.log(`Colore selezionato: ${product.colors[colorIndex].name}`);
    // Qui puoi aggiungere logica per cambiare immagini o altre proprietà
};


  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <NavBarE/>

      <Head>
        <title>{product.name} - Studio Design Interior</title>
        <meta name="description" content={product.description} />
      </Head>
      
      
    

        {/* Title section */}
        <Title title={product.name} />

        {/* Product section with flexbox layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - Carousel */}
            <div className="w-full md:w-1/2">
            <Carousel 
                images={product.images} 
                hoverImages={product.hoverImages} 
              />
            </div>
            
            {/* Right column - Product details */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg p-16">
                
                {/* Color selection buttons */}
                <ColorSelector colors={product.colors} onColorSelect={handleColorSelect} />
                
                {/* Product description and dimensions */}
                <Details 
                  description={product.description} 
                  dimensions={product.dimensions} 
                />
                
                {/* Contact button */}
                <Button />
                
              </div>
            </div>
          </div>
        </div>
        <Navigation prevLink="/prodotto/123" nextLink="/prodotto/456" />

        



      </div>

            

    


  );
}

