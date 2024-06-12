import React from 'react';
import './Button.styles.css';

const Button = ({ type = 'button', onClick, children }) => {
    return (
        <button type={type} onClick={onClick} className="button">
            {children}
        </button>
    );
};

export default Button;
