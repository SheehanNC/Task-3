import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => 
{
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ['#FFABAA', '#FF977B', '#4FFBAB', '#D0FFAB', '#F9FFD4', '#AABFFC', '#ABD4F0', '#DD6BFF', '#FFABFF', '#AAABD2'];

  const handleColorClick = (color) => 
  {
    setSelectedColor(color);
    setShowColorList(false);
    document.body.style.backgroundColor = color;
  };

  const handlePickColorClick = () => 
  {
    setShowColorList(true);
  };

  return (
    <div className="color-picker">
      {showColorList ? (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>
      ) : (
        <button onClick={handlePickColorClick}>Pick a Color</button>
      )}
    </div>
  );
};

export default ColorPicker;
