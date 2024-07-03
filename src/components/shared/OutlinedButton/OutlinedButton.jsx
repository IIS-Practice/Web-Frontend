import React from "react";
import "./OutlinedButton.styles.scss";

const OutlinedButton = ({ text, onClick, className }) => {
  return (
    <button className={`outlined-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default OutlinedButton;
