import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";
import { color } from "framer-motion";
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.shirtColor}
        onChange={(color) => (state.shirtColor = color.hex)}
        disableAlpha
      ></SketchPicker>
    </div>
  );
};

export default ColorPicker;
