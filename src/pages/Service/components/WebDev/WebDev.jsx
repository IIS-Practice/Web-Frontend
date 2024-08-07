import React, { useState } from "react";
import { ReactComponent as Star } from "@assets/star.svg";
import { useNavigate } from "react-router-dom";
import styles from "./WebDev.module.css";
import OutlinedButton from "@components/shared/OutlinedButton";
import ModalForm from "@components/shared/ModalForm";
import { PRICE_ROUTE } from "@utils/constants";

const mistakesData = {
  mistake1: {
    heading: "Отсутствие чёткого призыва к действию",
    description:
      "Разработка веб-сайта должна начинаться с четкого понимания, что должен сделать пользователь, попадая на ваш сайт. " +
      "Используйте контент, который описывает ценность ваших продуктов или услуг, а также убедительную фразу, побуждающую к действию.",
    list: ["Добавить в корзину", "Зарегистрироваться", "Узнать больше"],
  },
  mistake2: {
    heading: "Отсутствие аналитики для измерения эффективности",
    description:
      "Встраивание инструментов отслеживания производительности достаточно быстро окупают стоимость разработки сайта. " +
      "Подключив сайт к Google Analytics, вы сможете на основе получаемой аналитики корректировать рекламные компании и настраивать " +
      "онлайн-маркетинг на аудиторию, которая принесет вам прибыль.",
  },
  mistake3: {
    heading: "Размытая информация о бренде",
    description:
      "Важно сразу же дать понять пользователям, кто вы и чем занимаетесь. Разместите на главном баннере описание " +
      "вашей услуги или товара. Меньше говорите о себе и больше говорите с аудиторией, чтобы решить их болевые точки. Это разговор, " +
      "который укрепляет доверие и ведет к увеличению продаж.",
  },
  mistake4: {
    heading: "Слабая поисковая оптимизация (SEO)",
    description:
      "Идеально оптимизированная страница веб-сайта способна увеличить трафик на 20%.",
    list: [
      "Используйте длинные ключевые фразы, вам будет легче ранжироваться.",
      "Регулярная публикация качественного контента.",
      "Поощряйте социальную активность. Добавьте кнопки социальных сетей.",
    ],
  },
};

const WebDev = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentMistakeKey, setCurrentMistakeKey] = useState("mistake1");
  const navigate = useNavigate();

  const handleClick = (mistakeKey) => {
    setCurrentMistakeKey(mistakeKey);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const currentMistake = mistakesData[currentMistakeKey];

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>
          Создавая <span className={styles.headingSpan}>уникальные сайты</span>,
          мы воплощаем в жизнь коммерческие цели наших клиентов
        </h1>
      </div>
      <div className={styles.mistakesContainer}>
        <div className={styles.content}>
          <h3 className={styles.mistakesHeading}>
            4 основные ошибки при разработке сайта
          </h3>
          <div className={styles.pointsAndDescription}>
            <ul className={styles.mistakesPoints}>
              {Object.keys(mistakesData).map((key) => (
                <li
                  key={key}
                  className={`${styles.point} ${key === currentMistakeKey ? styles.active : ""}`}
                  onClick={() => handleClick(key)}
                >
                  {mistakesData[key].heading}
                </li>
              ))}
            </ul>
            <div className={styles.pointDescription}>
              <h3 className={styles.descriptionHeading}>
                {currentMistake.heading}
              </h3>
              <p className={styles.mistakeDescription}>
                {currentMistake.description}
              </p>
              {currentMistake.list && currentMistake.list.length > 0 && (
                <ul className={styles.nestedPoints}>
                  {currentMistake.list.map((item, index) => (
                    <div key={index} className={styles.nestedPointWrapper}>
                      <Star className={styles.star} />
                      <li className={styles.nestedPoint}>{item}</li>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.advContainer}>
        <div className={styles.content}>
          <div>
            <h3 className={styles.advHeading}>
              Почему работать с нами удобно и выгодно?
            </h3>
            <div className={styles.advContent}>
              <div className={styles.advElement}>
                <div className={styles.advElementHeadingContainer}>
                  <h3 className={styles.advElementHeading}>
                    ПРОЕКТИРОВАНИЕ ИНТЕРФЕЙСОВ
                  </h3>
                </div>
                <p className={styles.advDescription}>
                  Делаем страницы удобными и понятными, подавая информацию о
                  ваших товарах и услугах в максимально эффективном виде.
                  Простота и удобство взаимодействия пользователя с сайтом –
                  залог того, что он не закроет вкладку, отчаявшись найти нужную
                  ему информацию в "простыне" плохо отформатированного текста и
                  необозначенных элементов навигации.
                </p>
              </div>
              <div className={styles.advElement}>
                <div className={styles.advElementHeadingContainer}>
                  <h3 className={styles.advElementHeading}>
                    АДАПТИВНАЯ ВЁРСТКА
                  </h3>
                </div>
                <p className={styles.advDescription}>
                  Посетителям вашего сайта не придется "подсовывать" мобильную
                  версию сайта, опасаясь громоздкости полноэкранных страниц.
                  Работа с медиазапросами позволяет одинаково хорошо
                  отображаться всему тексту, изображениям и элементам интерфейса
                  как на компьютере или ноутбуке, так и на планшете или
                  телефоне, независимо от разрешения и диагонали экрана
                  устройства.
                </p>
              </div>
              <div className={styles.advElement}>
                <div className={styles.advElementHeadingContainer}>
                  <h3 className={styles.advElementHeading}>
                    ПРОГРАММИРОВАНИЕ И ИНТЕГРАЦИЯ
                  </h3>
                </div>
                <p className={styles.advDescription}>
                  Калькуляторы стоимости и фильтры по множественным параметрам
                  дают посетителям сайта именно то, чего они ожидают –
                  моментальное решение задач выбора. А интеграция платежных
                  систем, API сервисов и сайта несут за собой удобство расчетов
                  и логистическую разгрузку. Программные решения позволяют
                  делегировать "роботам" множество задач, тем самым разгрузить
                  ваш персонал, позволяя сконцентрироваться на рабочем процессе.
                </p>
              </div>
              <div className={styles.advElement}>
                <div className={styles.advElementHeadingContainer}>
                  <h3 className={styles.advElementHeading}>
                    ПОИСКОВАЯ ОПТИМИЗАЦИЯ
                  </h3>
                </div>
                <p className={styles.advDescription}>
                  Для достижения лидирующих позиций Вашего сайта в органической
                  выдаче таких поисковых систем как Яндекс и Google уже давно
                  недостаточно закупить тонну ссылок и радоваться топовым
                  позициям. Сейчас очень важно качество самого сайта, его
                  правильная оптимизация под требования и условия поисковиков, а
                  так же качество и тематика ссылающихся на него сайтов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.content}>
          <div>
            <h3 className={styles.orderHeading}>
              ЗАКАЗАВ РАЗРАБОТКУ И СОЗДАНИЕ<br></br>САЙТА ПОД КЛЮЧ
            </h3>
            <p className={styles.youGet}>Вы получите</p>
          </div>
          <div className={styles.getPointsContainer}>
            <div className={styles.getPointsElement}>
              <div className={styles.ball}>
                <span className={styles.ballDigit}>1</span>
              </div>
              <h4 className={styles.pointsElementHeading}>
                Гарантии и уверенность
              </h4>
              <h4 className={styles.pointsElementDescription}>
                Все работы выполняются согласно условиям заключенного договора.
                Оплата производится по безналичному расчету.
              </h4>
            </div>
            <div className={styles.getPointsElement}>
              <div className={styles.ball}>
                <span className={styles.ballDigit}>2</span>
              </div>
              <h4 className={styles.pointsElementHeading}>
                Контроль и отчетность
              </h4>
              <h4 className={styles.pointsElementDescription}>
                На все работы определяется время выполнения, согласуется
                техническое задание и сопроводительная документация.
              </h4>
            </div>
            <div className={styles.getPointsElement}>
              <div className={styles.ball}>
                <span className={styles.ballDigit}>3</span>
              </div>
              <h4 className={styles.pointsElementHeading}>
                Обучение и поддержка
              </h4>
              <h4 className={styles.pointsElementDescription}>
                После сдачи проекта мы обучаем вас или вашего ответственного
                сотрудника с последующей консультационной поддержкой.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.applicationContainer} ${styles.content}`}>
        <h3 className={styles.applicationHeading}>
          Чтобы заказать создание сайта под ключ в Минске – свяжитесь с нами.
        </h3>
        <div className={styles.applicationButtons}>
          <OutlinedButton text="Оставить заявку" onClick={openModal} />
          <OutlinedButton text="Прайс" onClick={() => navigate(PRICE_ROUTE)} />
        </div>
        <ModalForm showModal={showModal} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default WebDev;
