"use client";
// components/ProductDetails.js
export default function Details({ description, dimensions }) {
    return (
      <>
        {/* Product description */}
        <div className="mb-8">
          <h3 className="text-sm font-light text-black my-48 mb-2">Descriptions</h3>
          <p className="text-gray-600 text-sm font-thin">{description}</p>
        </div>
        
        {/* Product dimensions */}
        <div className="mb-8">
          <h3 className="text-sm font-light text-black mt-24 mb-2 md:mt-32">Dimensions</h3>
          <p className="text-sm text-gray-500 font-light">{dimensions}</p>
        </div>
      </>
    );
  }