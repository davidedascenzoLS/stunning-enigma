"use client";
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NavbarNew from '@/components/NavbarNew';

export default function ContactPage({ initialShowForm = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showForm, setShowForm] = useState(initialShowForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    
    console.log(formData);
    alert('Messaggio inviato! Ti contatteremo presto.');
    setFormData({ name: '', email: '', message: '' });
    setShowForm(false);
  };

  return (

    <div className="bg-white ">
  
    <NavbarNew className="fixed top-0 z-50" /> 
    
    <div className="flex flex-col lg:flex-row h-screen w-full md:pl-64">
      {/* Sezione Sinistra - Informazioni di Contatto */}
      <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 flex flex-col">        
        <div className="mb-8">
          <h1 className="text-2xl font-light mb-4 text-gray-700 pt-16 md:pt-80 text-sm">
            RESIDENTIAL, YACHTING, AVIATION INTERIOR<br />
            & FURNITURE DESIGN
          </h1>
          
          <div className="mt-8 space-y-2 text-gray-500 text-sm">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:studiolaurasessa@laurasessa.com" className="hover:text-black transition-colors">
                studiolaurasessa@laurasessa.com
              </a>
            </div>
            
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 font-light text-sm" />
              <a href="tel:+39069551968" className="hover:text-black transition-colors">
                +39 06 9551 968
              </a>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-sm" />
              <span>Via Roma 34, 00010 Poli (Roma), Italia</span>
            </div>
          </div>
          
          {/* Sezione Sinistra - Informazioni di Contatto 
          <div className="mt-8">
            <button 
              onClick={() => setShowForm(!showForm)}
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-black transition-colors flex items-center text-sm"
            >
              <Send className="w-4 h-4 mr-2" />
              {showForm ? 'Contattaci' : 'Contattaci'}
            </button>
          </div>
          */}

         
          {showForm && (
            <div className="mt-6 p-6   shadow-sm">
              <h3 className="text-lg font-medium mb-4 text-gray-500">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-500">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-500">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-500">Messagge</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                  />
                </div>
                
                <div>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-black"
                  >
                    Invia
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div> 
      
      
      {/* Sezione Destra - Google Maps */}
      <div className="w-full lg:w-1/2 h-[100vh] md:h-96 lg:h-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4892.232564589202!2d12.87147167724714!3d41.88971846468493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f7d2ad0f2fd0b%3A0xb42556294ad4a163!2sLaura%20Sessa%20SRL!5e1!3m2!1sit!2sit!4v1746532015951!5m2!1sit!2sit" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
          title="Laura Sessa SRL Map"
        />
      </div>
    </div>
    </div>
  );
}