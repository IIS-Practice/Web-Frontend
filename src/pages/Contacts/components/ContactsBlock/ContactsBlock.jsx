import React from "react";
import "./ContactsBlock.styles.css";

const ContactsBlock = ({ picture, name, text, link, data }) => {
  return (
    <div className="contacts-block">
      <div>{picture}</div>
      <h2 className="name">{name}</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text">{text}</p>
      </div>

      <p className="data">
        <a href={link}>{data}</a>
      </p>
    </div>
  );
};

export default ContactsBlock;
