import React from "react";
import "./ContactsBlock.styles.css";

const ContactsBlock = ({ phone, email, address }) => {
  return (
    <div className="contacts-block">
      <h2>Контактная информация</h2>
      <p>
        <strong>Телефон:</strong> {phone}
      </p>
      <p>
        <strong>Эл. почта:</strong> {email}
      </p>
      <p>
        <strong>Адрес:</strong> {address}
      </p>
    </div>
  );
};

export default ContactsBlock;
