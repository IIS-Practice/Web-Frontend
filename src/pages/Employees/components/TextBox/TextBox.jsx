import React from "react";
import "./TextBox.styles.css";

const TextBox = ({ text1, text2 }) => {
    return (
        <div className="text-block">
            <h2>Наши сотрудники</h2>
            <p>
                {text1}
            </p>

            <p>
                {text2}
            </p>
        </div>
    );
};

export default TextBox;
