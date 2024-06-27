import React, { useState } from "react";
import "./Cases.styles.css";
import Case from "./components/Case";
import IMG from "./case_example.svg";
import OutlinedButton from "@components/shared/OutlinedButton";

export const casesData = [
  {
    image: IMG,
    title: 'PITA STREET FOOD',
    description: 'Компания “PITA STREET FOOD”обратилась к нам за разработкой полноценного сайта их заведения. В ходе живого общения с нашими специалистами, заказчик четко определился со структурой сайта, также в ТЗ была включена реализация платёжной системы сайта.',
    link: 'pita-street-food',
    service: 'Разработка сайта',
    specialization: 'Гастрономия',
    duration: 6,
    level: 3,
    price: 900,
    little_description: 'Разработка сайта для корректного отображения на всех устройствах!',
    steps: 'На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,\n' +
      'в рамках которых, вели дальнейшую разработку проекта.'
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Кейс 2',
    description: 'Описание кейса 2',
    link: 'case-2',
    service: 'SEO оптимизация',
    specialization: 'Электронная коммерция',
    duration: 4,
    level: 2,
    price: 1200,
    little_description: 'Описание SEO оптимизации для электронной коммерции.',
    steps: 'На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,\n' +
      'в рамках которых, вели дальнейшую разработку проекта.'
  },
  {
    image: 'https://example.com/image3.jpg',
    title: 'Кейс 3',
    description: 'Описание кейса 3',
    link: 'case-3',
    service: 'Разработка приложения',
    specialization: 'Финансы',
    duration: 8,
    level: 4,
    price: 2500,
    little_description: 'Разработка финансового приложения с расширенными функциями!',
    steps: 'На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,\n' +
      'в рамках которых, вели дальнейшую разработку проекта.'
  },
  {
    image: 'https://example.com/image4.jpg',
    title: 'Кейс 4',
    description: 'Описание кейса 4',
    link: 'case-4',
    service: 'Создание контента',
    specialization: 'Образование',
    duration: 3,
    level: 1,
    price: 500,
    little_description: 'Создание образовательного контента для школ и университетов.',
    steps: 'На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,\n' +
      'в рамках которых, вели дальнейшую разработку проекта.'
  },
  {
    image: 'https://example.com/image5.jpg',
    title: 'Кейс 5',
    description: 'Описание кейса 5',
    link: 'case-5',
    service: 'Маркетинг',
    specialization: 'Розничная торговля',
    duration: 5,
    level: 3,
    price: 1500,
    little_description: 'Маркетинговая кампания для увеличения продаж в розничной торговле!',
    steps: 'На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,\n' +
      'в рамках которых, вели дальнейшую разработку проекта.'
  },
  {
    image: 'https://example.com/image6.jpg',
    title: 'Кейс 6',
    description: 'Описание кейса 6',
    link: 'case-6',
    service: 'Брендинг',
    specialization: 'Медиа',
    duration: 7,
    level: 5,
    price: 3000,
    little_description: 'Брендинг для медиа-компании, включая разработку логотипа и стиля.',
    steps: 'На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,\n' +
      'в рамках которых, вели дальнейшую разработку проекта.'
  },
  {
    image: 'https://example.com/image7.jpg',
    title: 'Кейс 7',
    description: 'Описание кейса 7',
    link: 'case-7',
    service: 'Аналитика',
    specialization: 'Технологии',
    duration: 2,
    level: 2,
    price: 800,
    little_description: 'Аналитика для технологической компании с фокусом на улучшение KPI.',
    steps: 'На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,\n' +
      'в рамках которых, вели дальнейшую разработку проекта.'
  }
];

const Cases = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const showMoreCases = () => {
    setVisibleCount(casesData.length); // Показать все кейсы
  };

  const getClassName = (index) => {
    if (index === 0) return 'case-one';
    return (index % 8 === 1 || index % 8 === 4 || index % 8 === 5) ? 'case-card-small' : 'case-card-big';
  };

  return (
    <div className="cases-content">
      <h1 className="contact-head">Кейсы</h1>
      <div className="cases-grid">
        {casesData.slice(0, visibleCount).map((caseItem, index) => (
          <Case
            key={index}
            image={caseItem.image}
            title={caseItem.title}
            little_description={caseItem.little_description}
            link={caseItem.link}
            steps = {caseItem.steps}
            className={`case-card ${getClassName(index)}`}
          />
        ))}
      </div>
      {visibleCount < casesData.length && (
        <div className="button-div">
          <OutlinedButton text="Показать&nbsp;ещё" onClick={showMoreCases} />
        </div>
      )}
    </div>
  );
};

export default Cases;
