export default function ProjectHeaderresidential({ 
  location = "Harrison Eidsgaard", 
  completion = "2019", 
  services = "Interior Design & FF&E", 
  scale = "95m | 312'6\"", 
  
}) {
  return (
    <header className="w-full max-w-screen-2xl pl-16 md:ml-64 pt-32 md:pt-16 py-8 md:py-16 px-4 md:px-8 bg-white font-light text-gray-700 tracking-wide">
      <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-8">
        {/* Prima colonna */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-xs uppercase text-gray-400 mb-1">Location</h3>
          <p className="text-sm">{location}</p>
          
          <h3 className="text-xs uppercase text-gray-400 mt-6 mb-1">Completion</h3>
          <p className="text-sm">{completion}</p>
        </div>
        
        {/* Seconda colonna */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          <h3 className="text-xs uppercase text-gray-400 mb-1">LS Services</h3>
          <p className="text-sm">{services}</p>
          
          <h3 className="text-xs uppercase text-gray-400 mt-6 mb-1">Project Scale</h3>
          <p className="text-sm">{scale}</p>
        </div>
        
        
      </div>
    </header>
  );
}