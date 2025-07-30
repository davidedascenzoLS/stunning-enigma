"use client";
export default function Title({ title }) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-32 md:mt-32 pt-24 pb-16 ">
        <h1 className="text-3xl md:text-5xl font-thin text-gray-900">{title}</h1>
      </div>
    );
  }