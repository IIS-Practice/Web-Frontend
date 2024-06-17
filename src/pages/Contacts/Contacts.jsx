import React from "react";
import ContactsBlock from "./components/ContactsBlock/ContactsBlock";
import Form from "@components/shared/Form";
import { ReactComponent as PhoneIcon } from "@assets/phone.svg";
import { ReactComponent as LetterIcon } from "@assets/letter.svg";
import { ReactComponent as LocationIcon } from "@assets/location.svg";
import "./Contacts.styles.scss";

const Contacts = () => {
  const contactsData = [
    {
      picture: <PhoneIcon />,
      name: "Телефон",
      text: "Наши специалисты готовы принимать Ваши звонки в рабочее время офиса с 9:00 до 17:00 с понедельника по пятницу.",
      link: "tel:+375296764510",
      data: "+375 (29) 676-45-10",
    },
    {
      picture: <LetterIcon />,
      name: "Электронная почта",
      text: "Заявки на электронную почту мы принимаем ежедневно в режиме 24/7. Будьте уверены, мы обязательно с вами свяжемся!",
      link: "mailto:contact@example.com",
      data: "contact@example.com",
    },
    {
      picture: <LocationIcon />,
      name: "Местоположение офиса",
      text: "Приглашаем Вас в наш офис. Также, есть возможность встреч с партнерами и заказчиками в удобном для Вас месте.",
      link: "https://yandex.by/maps/157/minsk/house/Zk4YcwJnSUIHQFtpfXVwd3prYA==/?ll=27.557070%2C53.916685&z=17.15",
      data: "г. Минск, ул. Кропоткина, д.44",
    },
  ];

  return (
    <div className="contacts-page">
      <h1 className="contact-head">Контакты</h1>
      <div className="contacts-blocks">
        {contactsData.map((contact, index) => (
          <ContactsBlock
            className="contact-element"
            key={index}
            picture={contact.picture}
            name={contact.name}
            text={contact.text}
            link={contact.link}
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
