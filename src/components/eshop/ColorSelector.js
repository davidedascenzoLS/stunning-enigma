"use client";
import { useState } from 'react';

export default function ColorSelector({ colors, onColorSelect }) {
  const [selectedColor, setSelectedColor] = useState(0);
  
  const handleColorSelect = (index) => {
    setSelectedColor(index);
    if (onColorSelect) {
      onColorSelect(index);
    }
  };
  
  return (
    <div className="mb-6">
      
      <div className="flex space-x-3">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full focus:outline-none ${selectedColor === index ? 'ring-5 ring-offset-0 ring-gray-200' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorSelect(index)}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}