"use client";
import { useState } from 'react';

export default function ContactButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui puoi inserire la logica per inviare i dati del form
    console.log('Form inviato:', formData);
    // Reset del form e chiusura del modal
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsModalOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="relative w-full bg-white border border-black text-black md:mt-8 py-3 px-8 rounded-md overflow-hidden group"
      >
        {/* Overlay animato da sinistra a destra */}
        <span className="absolute inset-0 w-0 bg-black transition-all duration-800 ease-out group-hover:w-full left-0"></span>
        
        {/* Testo del pulsante */}
        <span className="relative z-10 text-sm font-light transition-colors duration-300 group-hover:text-white">
          Ask Informations
        </span>
      </button>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
            className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pulsante di chiusura */}
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">Fill out the form to request information about the product.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 text-gray-600 hover:text-gray-900"
                  onClick={() => setIsModalOpen(false)}
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="relative bg-white border border-black text-black py-2 px-6 rounded-md overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-out group-hover:w-full left-0"></span>
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Invia
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}