import React, { useState } from "react";
import "./HomeProjects.styles.css";
import { SERVICES_ROUTE } from "@utils/constants";
import { Link } from "react-router-dom";

const HomeProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: "Разработка сайтов",
      description: "Создаём уникальные сайты, которые повышают конверсию продаж...",
      route: `${SERVICES_ROUTE}/webDev`
    },
    {
      name: "Разработка ботов",
      description: "Разрабатываем интеллектуальных ботов, которые автоматизируют задачи...",
      route: `${SERVICES_ROUTE}/botDev`
    },
    {
      name: "Разработка мобильных приложений",
      description: "Создаём интуитивно понятные и функциональные мобильные приложения...",
      route: `${SERVICES_ROUTE}/mobileDev`
    },
    {
      name: "UX/UI Дизайн",
      description: "Разрабатываем привлекательные и удобные интерфейсы, которые улучшают пользовательский опыт...",
      route: `${SERVICES_ROUTE}/ux`
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="home-projects">
      <div className="home-box">
        <h2>
          Разработка проектов <br /> различной степени сложности
        </h2>
        <div className="projects-grid">
          <div className="project-large">
            <div className="project-content-main">
              <h3>
                IISolutions - это профессиональный разработчик веб-сервисов,
                ботов и мобильных приложений.
              </h3>
              <p>
                Создание многофункциональных проектов по методологии Time &
                Materials является основным продуктом компании. Для реализации
                проектов мы используем:
              </p>
              <ul className="projects-list">
                <li>Современный адаптивный дизайн;</li>
                <li>Различные языки и фреймворки;</li>
                <li>Прохождение контроля качества;</li>
                <li>Правильная настройка CMS.</li>
              </ul>
            </div>
          </div>

          <div className="small-projects-wrapper">
            <button className="nav-button left" onClick={prevProject}>
              &lt;
            </button>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-small ${index === currentProject ? "active" : ""}`}
              >
                <div className="project-content">
                  <h3 className="content-name">{project.name}</h3>
                  <p className="content-description">{project.description}</p>
                  <Link to={project.route} className="content-button">
                    Узнать подробнее
                  </Link>
                </div>
              </div>
            ))}
            <button className="nav-button right" onClick={nextProject}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
