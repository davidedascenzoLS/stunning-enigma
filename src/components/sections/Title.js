"use client";


const Title = ({ 
  title = "Main Title", 
  subtitle = "Subtitle text goes here", 
  align = "center", 
  titleColor = "text-gray-700", 
  subtitleColor = "text-gray-500" 
}) => {
  // Alignment classes
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} my-4 font-sans pl-8 py-18 md:py-32`}>
      <p className={`mb-1 text-base font-light tracking-[0.1em] ${subtitleColor} pl-8`}>
        {subtitle}
      </p>
      
      <h1 className={`text-2xl md:text-6xl font-thin tracking-[0.1em] ${titleColor} relative group pl-8`}>
        {title}
       
      </h1>
    </div>
  );
};

export default Title;
