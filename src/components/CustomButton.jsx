import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state);
  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "white",
      };
    } else if (type === "outline") {
      return {
        color: snap.color,
        border: `1px solid ${snap.color}`,
      };
    }
  };
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
      style={generateStyles(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
