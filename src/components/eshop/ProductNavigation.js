"use client";
import Link from "next/link";

export default function Navigation({ prevLink, nextLink }) {
  return (
    <div className="flex justify-center items-center gap-4 px-8 pb-8 pt-4 md:mt-32">

      {/* Previous Button */}
      <Link href={prevLink || "#"}>
        <div className="group relative h-[80px] w-[150px] md:w-[300px] border border-black/0 rounded-md overflow-hidden cursor-pointer transition-all duration-300 group-hover:border-red-600">
          <span className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-800 ease-in-out z-0" />
          <div className="relative z-10 flex justify-center items-center h-full text-black group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6 mr-0 md:mr-24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
      </Link>

      {/* Next Button */}
      <Link href={nextLink || "#"}>
        <div className="group relative h-[80px] w-[150px] md:w-[300px] border border-black/0 rounded-md overflow-hidden cursor-pointer transition-all duration-300 group-hover:border-red-600">
          <span className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-800 ease-in-out z-0" />
          <div className="relative z-10 flex justify-center items-center h-full text-black group-hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6 ml-0 md:ml-24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>

    </div>
  );
}
