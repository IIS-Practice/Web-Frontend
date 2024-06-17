import React from "react";
import ContactsBlock from "./components/ContactsBlock/ContactsBlock";
import Form from "@components/shared/Form";
import "./Contacts.styles.scss";

const Contacts = () => {
  const contactsData = [
    {
      picture: "https://www.svgrepo.com/show/533286/phone-call-alt-1.svg",
      name: "Телефон",
      text: "Наши специалисты готовы принимать Ваши звонки в рабочее время офиса с 9:00 до 17:00 с понедельника по пятницу.",
      data: "+7 (123) 456-7890",
    },
    {
      picture: "https://www.svgrepo.com/show/453779/letter.svg",
      name: "Электронная почта",
      text: "Заявки на электронную почту мы принимаем ежедневно в режиме 24/7. Будьте уверены, мы обязательно с вами свяжемся!",
      data: "contact@example.com",
    },
    {
      picture: "https://www.svgrepo.com/show/509148/location-pin.svg",
      name: "Местоположение офиса",
      text: "Приглашаем Вас в наш офис. Также, есть возможность встреч с партнерами и заказчиками в удобном для Вас месте.",
      data: "ул. Мира, 3",
    },
  ];

  return (
    <div className="contacts-page">
      <h1 className="contact-head">Контакты</h1>
      <div className="contacts-blocks">
        {contactsData.map((contact, index) => (
          <ContactsBlock
            key={index}
            picture={contact.picture}
            name={contact.name}
            text={contact.text}
            data={contact.data}
          />
        ))}
      </div>
      <div>
        <h1 className="contact-head">
          Мы рады увидеть <span className="form-head">Вашу</span> заявку!
        </h1>
        <p className="contact-p">
          Пожалуйста оставьте Ваши имя и телефон, мы будем счастливы помочь Вам.
        </p>
        <div className="contact-form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
