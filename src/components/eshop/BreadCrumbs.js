"use client";
import Link from 'next/link';

export default function BreadCrumbs({ categories }) {
  return (
    <div className="bg-white py-8 z-20  absolute top-30 md:top-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0 z-20 ">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-3">
            <li>
              <Link href="/">
                <div className="text-black hover:text-gray-700 font-light">Home</div>
              </Link>
            </li>
            {categories.map((category, index) => (
              <li key={index} className="flex items-center">
                <svg className="flex-shrink-0 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href={`/categoria/${category.toLowerCase()}`}>
                  <div className="ml-4 text-black hover:text-gray-700 text-sm font-thin">
                    {category}
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}