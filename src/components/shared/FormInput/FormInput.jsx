import React from "react";
import "./FormInput.styles.css";

const FormInput = ({ label, type, name, required }) => {
  return (
    <div className="form-input">
      <label>
        {label}
        <input type={type} name={name} required={required} />
      </label>
    </div>
  );
};

export default FormInput;
