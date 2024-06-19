import React from 'react';
import './HomeMainBlock.styles.css';
import CompanyImage from '../../images/CompanyImage.png';

const HomeMainBlock = () => {
  return (
    <div className="MainBlock">
      <div className="CompanyName">
        <h1>
          IISolutions - 
        </h1>
        <h2>
          ваши идеи, наше <span>воплощение</span>
        </h2>
      </div>
      <div className="CompanyImage">
        <img src={CompanyImage} alt="Изображение" />
      </div>
    </div>
  );
};

export default HomeMainBlock;
