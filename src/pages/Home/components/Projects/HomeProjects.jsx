
import React from 'react';
import './HomeProjects.styles.css';
import OutlinedButton from '../../../../components/shared/OutlinedButton/OutlinedButton';

const HomeProjects = () => {
  return (
    <div className="home-projects">
      <div className="home-box">
      <h2>Разработка проектов <br /> различной степени сложности</h2>
      <div className="projects-grid">
        <div className="project-large">
          <div className="project-content-main">
            <h3>IlSolutions - это профессиональный разработчик веб-сервисов, ботов и мобильных приложений.</h3>
            <p>
              Создание многофункциональных проектов по методологии Time & Materials
              является основным продуктом компании. Для реализации проектов мы используем:
            </p>
            <ul className="projects-list">
              <li>Современный адаптивный дизайн;</li>
              <li>Различные языки и фреймворки;</li>
              <li>Прохождение контроля качества;</li>
              <li>Правильная настройка CMS.</li>
            </ul>
          </div>
        </div>
        <div className="project-small">
          <div className="project-content">
            <h3 className="content-name">Разработка сайтов</h3>
            <p className="content-description">
              Создаём уникальные сайты, которые <br />
              повышают конверсию продаж...
            </p>
            <button className="content-button">Узнать подробнее</button>
          </div>
        </div>
        <div className="project-small">
          <div className="project-content">
            <h3 className="content-name">Разработка ботов</h3>
            <p className="content-description">
              Разрабатываем интеллектуальных <br />
              ботов, которые автоматизируют <br />
              задачи...
            </p>
            <button className="content-button">Узнать подробнее</button>
          </div>
        </div>
        <div className="project-small">
          <div className="project-content">
            <h3 className="content-name">Разработка мобильных приложений</h3>
            <p className="content-description">
              Создаём интуитивно понятные и <br />
              функциональные мобильные <br />
              приложения...
            </p>
            <button className="content-button">Узнать подробнее</button>
          </div>
        </div>
        <div className="project-small">
          <div className="project-content">
            <h3 className="content-name">UX/UI Дизайн</h3>
            <p className="content-description">
              Разрабатываем привлекательные и <br />
              удобные интерфейсы, которые <br />
              улучшают пользовательский опыт...
            </p>
            <button className="content-button">Узнать подробнее</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomeProjects;
