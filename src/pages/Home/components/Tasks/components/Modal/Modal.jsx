import React, { useEffect } from "react";
import "./Modal.styles.scss";
import { ReactComponent as CrossIcon } from "@assets/cross.svg";

const Modal = ({ title, text, content, showModal, closeModal }) => {
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
    <div>
      <div className="dark-base" />
      <div className="info-modal">
        <div className="content">
          <button className="close-button" onClick={closeModal}>
            <CrossIcon />
          </button>
          <div className="header">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div className="body">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
