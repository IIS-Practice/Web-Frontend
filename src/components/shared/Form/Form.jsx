import React from "react";
import "./Form.styles.scss";

const Form = () => {
  return (
    <div className="form">
      <div className="input-body">
        <div className="input-group">
          <input type="text" placeholder="Имя" required />
          <input type="tel" placeholder="Телефон" required />
          <input type="email" placeholder="Почта" required />
        </div>
        <div className="textarea-group">
          <textarea
            placeholder="Краткая информация"
            rows="5"
            required
          ></textarea>
        </div>
      </div>
      <div className="button-body">
        <button>Отправить заявку</button>
        <span>
          Отправляя форму, Вы даете согласие на обработку своих персональных
          данных в соответствии с политикой конфиденциальности
        </span>
      </div>
    </div>
  );
};

export default Form;
