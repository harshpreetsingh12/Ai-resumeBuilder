import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";

type ColorPickerProps = {
  color: string;
  setColor: (color: string) => void;
};

const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
};

export default ColorPicker;
