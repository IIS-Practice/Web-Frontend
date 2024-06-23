import React from "react";
import "./DepartmentButton.styles.scss";

const DepartmentButton = ({ text, onClick }) => {
  return (
    <button className="dropdown-btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default DepartmentButton;
