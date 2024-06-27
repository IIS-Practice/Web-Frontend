import React, { useState } from "react";
import "./HomeMainBlock.styles.css";
import CompanyImage from "@assets/CompanyImage.png";
import OutlinedButton from "@components/shared/OutlinedButton";


const HomeMainBlock = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);

  return (
    <div className="MainBlock">
      <div className="CompanyName">
        <div className="text-container">
          <h1>IISolutions -</h1>
          <h2>ваши идеи, наше</h2>
          <h2>воплощение</h2>
          <OutlinedButton text="Оставить&nbsp;заявку" onClick={openModal} />
        </div>
      </div>
      <div className="CompanyImage">
        <img src={CompanyImage} alt="Изображение" />
      </div>
    </div>
  );
};

export default HomeMainBlock;
