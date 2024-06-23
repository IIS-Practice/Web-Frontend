import React from "react";
import "./HomeMainBlock.styles.css";
import CompanyImage from "@assets/CompanyImage.png";

const HomeMainBlock = () => {
  return (
    <div className="MainBlock">
      <div className="CompanyName">
        <div className="text-container">
          <h1>IISolutions -</h1>
          <h2>ваши идеи,</h2>
          <h2>наше воплощение</h2>
        </div>
      </div>
      <div className="CompanyImage">
        <img src={CompanyImage} alt="Изображение" />
      </div>
    </div>
  );
};

export default HomeMainBlock;
