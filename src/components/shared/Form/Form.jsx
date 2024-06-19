import React, { useState } from "react";
import "./Form.styles.scss";
import { addAplication } from "@api/services/applicationApi";

const Form = () => {
  const [author, setAuthor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSendApplication = () => {
    setIsSubmitting(true);
    setIsError(false);
    setErrors({});

    addAplication(author, phoneNumber, email, description)
      .then((response) => {
        console.log(response);

        setAuthor("");
        setPhoneNumber("");
        setEmail("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);

        if (error.status === 400) {
          setErrors(error.errors);
          setIsError(true);
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="form">
      <div className="input-body">
        <div className="input-group">
          <input
            type="text"
            placeholder="Имя"
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            style={{
              borderColor: errors.Author ? "var(--error-color)" : "initial",
            }}
          />
          <input
            type="tel"
            placeholder="Телефон"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            style={{
              borderColor: errors.PhoneNumber
                ? "var(--error-color)"
                : "initial",
            }}
          />
          <input
            type="email"
            placeholder="Почта"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{
              borderColor: errors.Email ? "var(--error-color)" : "initial",
            }}
          />
        </div>
        <div className="textarea-group">
          <textarea
            placeholder="Краткая информация"
            rows="5"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            style={{
              borderColor: errors.Description
                ? "var(--error-color)"
                : "initial",
            }}
          ></textarea>
        </div>
      </div>
      <div className="button-body">
        <button onClick={handleSendApplication} disabled={isSubmitting}>
          Отправить заявку
        </button>
        <span>
          Отправляя форму, Вы даете согласие на обработку своих персональных
          данных в соответствии с политикой конфиденциальности
        </span>
      </div>
      {isError && <p className="error-message">Некорректные данные</p>}
    </div>
  );
};

export default Form;
