import React, { useState } from "react";
import "./ConnectLink.styles.css";
import { ReactComponent as Line } from "@assets/line.svg"
import { Link } from "react-router-dom";
import ModalForm from "@components/shared/ModalForm";

const CallToAction = ({title, name}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="call-to-action">
      <p>{title}</p>
      <Link onClick={openModal} className="action-ring">
        {name}
      </Link>
      <ModalForm showModal={showModal} closeModal={closeModal} />
      <Line className="line"/>
    </div>
  );
};

export default CallToAction;
