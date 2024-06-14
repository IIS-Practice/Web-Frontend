import React from "react";
import "./OutlinedButton.styles.css";

const OutlinedButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default OutlinedButton;
