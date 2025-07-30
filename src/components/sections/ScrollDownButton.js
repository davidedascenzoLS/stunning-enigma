'use client';

export default function ScrollDownButton() {
    
  const scrollToSection = () => {
    const target = document.getElementById('first-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn("❌ Sezione non trovata!");
      }
    
  };

  return (
    <div className="absolute inset-x-0 bottom-3 z-30 flex justify-center fixed md:ml-64">
      <button
        onClick={scrollToSection}
        className=" backdrop-blur-md rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}