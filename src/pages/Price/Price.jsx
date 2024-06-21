import React from "react";
import "./Price.styles.css";

const card = [
  {
    title: "Разработка сайта",
    price: "от 1000 $",
    features: [
      "Составление ТЗ",
      "Дизайн интерфейса",
      "Техническая разработка",
      "Тестирование"
    ]
  },
  {
    title: "Разработка мобильного приложения",
    price: "от 1000 $",
    features: [
      "Составление ТЗ",
      "Дизайн интерфейса",
      "Техническая разработка",
      "Тестирование"
    ]
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
  },
  {
    title: "UX/UI Дизайн",
    price: "от 1000 $",
    features: [
      "Составление ТЗ",
      "Прототип",
      "Дизайн интерфейса"
    ],
  }
]

const Price = () => {
  return (<main>
    <h1>Прайс-лист</h1>
    <div className="priceGridContainer">
    {card?.map((description) => 
      <div>
        <h2>{description?.title}</h2>
        <h2>{description?.price}</h2>
        {description?.features?.map(feature => <div>{feature}</div>)}
      </div>
    )}
    </div>
  </main>);
};

export default Price;
