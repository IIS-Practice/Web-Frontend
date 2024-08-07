import React, { useState } from "react";
import "./HomeContacts.styles.css";
import ModalForm from "@components/shared/ModalForm";

const HomeContacts = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="home-contact">
      <h3>Давайте приступим к работе?</h3>
      <button
        className="contact-link"
        text="Оставить&nbsp;заявку"
        onClick={openModal}
      >
        Связаться с нами
      </button>
      <ModalForm showModal={showModal} closeModal={closeModal} />
      <hr></hr>
    </div>
  );
};

export default HomeContacts;
