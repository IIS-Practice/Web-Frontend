import React from 'react';
import './HomeTasks.styles.css';

const HomeTasks = () => {
  return (
    <div className="home-tasks">
      <h2>Работаем по подходящей для Вас <br />методологии</h2>
      <div className="tasks-container">
        <div className="task">
          <h3>WATERFALL</h3>
          <ul className="about-task">
            <li>
              <span>полное ТЗ</span>
            </li>
            <li>
              <span>запуск от 3х месяцев</span>
            </li>
            <li>
              <span>фиксированная цена</span>
            </li>
          </ul>
          <button>Подробнее</button>
        </div>
        <div className="vertical-line"></div>
        <div className="task">
          <h3>SCRUM</h3>
          <ul className="about-task">
            <li>
              <span>дорожная карта</span>
            </li>
            <li>
              <span>оплата по факту затраченных часов</span>
            </li>
            <li>
              <span>гибкая цена +/-</span>
            </li>
          </ul>
          <button>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default HomeTasks;
