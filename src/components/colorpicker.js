import React from "react";
import { SketchPicker } from "react-color";

const ColorPicker = ({ color, setColor }) => (
  <div className="bottom-screen">
    <SketchPicker
      color={color}
      onChangeComplete={(color) => {
        setColor(color.hex);
      }}
      presetColors={["#4D31BF", "#14C0B6", "#B1DD52"]}
    />
  </div>
);

export default ColorPicker;
