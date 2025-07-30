"use client";
import Link from 'next/link';
import Search from '../../components/eshop/SearchBar';
import BreadCrumbs from '../../components/eshop/BreadCrumbs';

export default function NavBarE() {
  const product = {
    categories: ["Salotto", "Sedute", "Poltrone"]
  };

  return (
    <nav className="bg-white top-0 z-30 md:h-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar top section */}
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            
          </div>
          
          {/* Search bar */}
          <div className="flex-1 max-w-md mx-4">
              <Search onSearch={(searchTerm) => console.log(searchTerm)} />
          </div>
          {/* Breadcrumbs */}
              <BreadCrumbs categories={product.categories} />
        </div>
      </div>
    </nav>
  );
}