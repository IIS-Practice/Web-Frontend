import React from "react";
import "./ContactsBlock.styles.css"

const ContactsBlock = ({ picture, name, text, data }) => {
  return (

    <div className="contacts-block">
      <div><img className="picture-image" src={picture} alt="pic" /></div>
      <h2 className="name" >{name}</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
        <p className="text">{text}</p>
      </div>

      <p className="data" >{data}</p>
    </div>
  );
};

export default ContactsBlock;
