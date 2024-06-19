import React from "react";
import { Link } from "react-router-dom";
import "./HomeContacts.styles.css";

const HomeContacts = () => {
  return (
    <div className="home-contact">
      <h3>Давайте приступим к работе?</h3>
      <Link to="/contacts" className="contact-link">
        Связаться с нами
      </Link>
      <hr></hr>
    </div>
  );
};

export default HomeContacts;
