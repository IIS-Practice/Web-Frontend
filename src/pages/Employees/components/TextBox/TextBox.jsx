import React from "react";
import "./TextBox.styles.scss";
import { Link } from "react-router-dom";
import { EMPLOYMENT_ROUTE } from "@utils/constants";

const TextBox = ({ text1, text2 }) => {
  return (
    <div className="text-block">
      <h2>Наши сотрудники</h2>
      <p className="text1">{text1}</p>

      <p className="text2">{text2}</p>
      <Link className="link-button" to={EMPLOYMENT_ROUTE}>
        Присоединяйтесь к нам
      </Link>
    </div>
  );
};

export default TextBox;
