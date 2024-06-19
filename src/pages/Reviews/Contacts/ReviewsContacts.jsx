import React, { useState } from 'react';
import './ReviewsContacts.styles.css';
import ModalForm from "@components/shared/ModalForm";

const ReviewsContacts = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="home-contact">
      <h3>Доверьтесь опыту наших клиентов!</h3>
      <button className="contact-link" text="Оставить&nbsp;заявку" onClick={openModal}>Связаться с нами</button>
      <ModalForm showModal={showModal} closeModal={closeModal} />
      <hr></hr>
    </div>
  );
};

export default ReviewsContacts;
