import React, { useState } from "react";
import Colors from "../data/Colors";

interface ColorPickerProps {
  predefinedColors: readonly string[];
}

const ColorPicker: React.FC<ColorPickerProps> = ({ predefinedColors }) => {
  const [selectedColor, setSelectedColor] = useState<string>(
    predefinedColors[0]
  );

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  return (
    <>
      <h2>Color Picker</h2>
      <div className="container">
        <div>
          <h3>Selected Color: </h3>
          <div className="wrapper">
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: selectedColor,
                display: "inline-block",
                marginLeft: "10px",
              }}
            ></div>
            <span>{selectedColor}</span>
          </div>
        </div>

        <div>
          <h3>Choose a Color:</h3>
          <div style={{ display: "flex", marginTop: "10px" }}>
            {predefinedColors.map((color) => (
              <div
                key={color}
                onClick={() => handleColorChange(color)}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color,
                  margin: "0 5px",
                  cursor: "pointer",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPicker;
