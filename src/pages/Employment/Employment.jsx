import React from "react";
import "./Employment.styles.scss";

const Employment = () => {
  return (
    <div className="employment-page">
      <div className="main-text">
        <h1>
          Работа в <span className="logo-text">IISolutions</span>
        </h1>
        <p>
          Амбициозная и целеустремленная команда профессионалов, предоставляющая
          высококачественные услуги по разработке проектов различной тематики:
          сайтов, ботов, мобильных приложений и решений для финтех компаний.
        </p>
        <p>
          Если вы ищете место работы с душевной атмосферой и приятными людьми,
          то наша команда – именно то, что вам нужно. Чтобы присоединиться,
          отправляйте свое резюме на электронную почту: ****@**.
        </p>
      </div>

      <h2>
        Почему надо работать в <span className="logo-text">IISolutions</span>?
      </h2>
      <div className="horizontal-line"></div>
      <div className="adv-container">
        <div className="adv">
          <div className="circle">1</div>
          <div className="text">
            Возможность проходить стажировки и перспективный карьерный рост
          </div>
        </div>
        <div className="adv">
          <div className="circle">2</div>
          <div className="text">Различные проекты и конкретные задачи</div>
        </div>
        <div className="adv">
          <div className="circle">3</div>
          <div className="text">Возможность работы в финтех компаниях</div>
        </div>
        <div className="adv">
          <div className="circle">4</div>
          <div className="text">
            Возможность пересмотра з/п после 6 месяцев работы
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employment;
