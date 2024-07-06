import React, { useState } from "react";
import "./HomeMainBlock.styles.scss";
import CompanyImage from "@assets/CompanyImage.png";
import OutlinedButton from "@components/shared/OutlinedButton";
import ModalForm from "@components/shared/ModalForm";

const HomeMainBlock = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="MainBlock">
      <div className="CompanyName">
        <div className="text-container">
          <h1>IISolutions -</h1>
          <h2>ваши идеи, наше</h2>
          <h2>воплощение</h2>
          <OutlinedButton
            text="Оставить&nbsp;заявку"
            onClick={openModal}
            className="submit-application"
          />
        </div>
      </div>
      <div className="CompanyImage">
        <img src={CompanyImage} alt="Изображение" />
      </div>
      <ModalForm showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default HomeMainBlock;
