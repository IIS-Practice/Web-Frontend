import React from "react";
import "./Price.styles.css";
import { Link } from "react-router-dom";

const card = [
  {
    title: "Разработка сайта",
    price: "от 1000 $",
    features: [
      "Составление ТЗ",
      "Дизайн интерфейса",
      "Техническая разработка",
      "Тестирование"
    ],
    link: "webDev"
  },
  {
    title: "Разработка мобильного приложения",
    price: "от 1000 $",
    features: [
      "Составление ТЗ",
      "Дизайн интерфейса",
      "Техническая разработка",
      "Тестирование"
    ],
    link: "mobileDev"
  },
  {
    title: "Разработка бота",
    price: "от 1000 $",
    features: [
      "Составление ТЗ",
      "Разработка",
      "Интеграция",
      "Тестирование"
    ],
    link: "botDev"
  },
  {
    title: "UX/UI Дизайн",
    price: "от 1000 $",
    features: [
      "Составление ТЗ",
      "Прототип",
      "Дизайн интерфейса"
    ],
    link: "ux"
  }
]

const Price = () => {
  return (<main>
    <h1 className="priceList">Прайс-лист</h1>
    <div className="priceGridContainer">
      {card?.map((description) =>
        <div>
          <h2>{description?.title}</h2>
          <h2>{description?.price}</h2>
          <div className="priceFeatures">
            {description?.features?.map(feature => <div>{feature}</div>)}
          </div>
          <button><Link to={`/services/${description.link}`}>Подробнее</Link></button>
        </div>
      )}
    </div>
  </main>);
};

export default Price;
