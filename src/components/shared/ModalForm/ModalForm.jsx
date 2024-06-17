import React, { useEffect } from "react";
import "./ModalForm.styles.scss";
import { ReactComponent as CrossIcon } from "@assets/cross.svg";
import Form from "@components/shared/Form";

const ModalForm = ({ showModal, closeModal }) => {
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-form">
      <div className="content">
        <div className="header">
          <h2>СВЯЖИТЕСЬ С НАМИ</h2>
          <button className="close-button" onClick={closeModal}>
            <CrossIcon />
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ModalForm;
