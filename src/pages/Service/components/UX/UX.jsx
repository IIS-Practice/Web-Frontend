import React, { useState } from "react";
import { ReactComponent as Star } from "@assets/star.svg";
import { useNavigate } from "react-router-dom";
import styles from "./UX.module.css";
import OutlinedButton from "@components/shared/OutlinedButton";
import ModalForm from "@components/shared/ModalForm";
import { PRICE_ROUTE } from "@utils/constants";

const UX = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.headingSpan}>Дизайн</span> интерфейсов любой
        сложности
      </h1>
      <p className={styles.topLevelText}>
        Наш дизайн интерфейсов не ограничивается только эстетикой. Мы
        обеспечиваем простотой для достижения цели, учитывая пользовательские
        привычки Ваших клиентов не только внутри сайта, приложения и других
        сервисов, а также офлайн.
      </p>
      <p className={styles.topLevelText}>
        Мы построим правильную логику взаимодействия пользователя с сайтом или
        приложением, которая приведёт к увеличению конверсии, продвижению
        товаров и улучшению обслуживания клиентов.
      </p>
      <div className={styles.exampleContainers}>
        <div>Сайты</div>
        <div>Веб-приложения</div>
        <div>Мобильные приложения</div>
      </div>
      <div className={styles.actionsContainer}>
        <div>
          <p>
            Подбираем на проект дизайнера с сильными скиллами в нужной области и
            усиливаем другими специалистами: 2D- и 3D-иллюстраторами.
          </p>
        </div>
        <div>
          <p>
            Отвечаем в течение дня, простые проекты оцениваем за два,
            подписываем документы и начинаем работу.
          </p>
        </div>
        <div>
          <p>
            Быстро вникаем в проект и не тратим деньги клиентов на прототипы для
            простых сервисов и в отраслях, где собаку съели.
          </p>
        </div>
      </div>
      <div className={styles.anotherContainer}>
        <h2 className={styles.anotherHeading}>Делаем сложные вещи простыми:</h2>
        <ul className={styles.points}>
          <li className={styles.point}>
            <Star />
            <span>Упорядочиваем большие объемы информации;</span>
          </li>
          <li className={styles.point}>
            <Star />
            <span>Выстраиваем навигацию;</span>
          </li>
          <li className={styles.point}>
            <Star />
            <span>
              Помогаем пользователю совершить целевое действие<br></br> без
              нервов и обращений в службу поддержки;
            </span>
          </li>
        </ul>
        <p className={styles.lowLevelText}>
          Если бизнес сложный, то больше времени уделяем глубокому исследованию,
          анализу аудитории и ее потребностей. Если выявляем много подводных
          камней, то делаем прототипы. Но чаще всего готовы предложить решение,
          не тратя десятки часов на изучение сферы и онбординг.
        </p>
      </div>
      <div className={styles.designContainer}>
        <h2
          className={styles.anotherHeading}
          style={{ color: "var(--dark-color)", marginBottom: "40px" }}
        >
          Дизайн, на который можно<br></br> опереться в будущем
        </h2>
        <p
          className={styles.lowLevelText}
          style={{ color: "var(--dark-color)", marginBottom: "40px" }}
        >
          Делаем продуманный качественный дизайн, который позволит решать новые
          бизнес-задачи быстро и с минимальными затратами. Для этого собираем
          UI-киты, чтобы упорядочить и унифицировать сотни элементов: кнопки,
          иконки, чекбоксы, поля, заголовки, меню, списки, селекты, уведомления,
          модальные окна. Разработчики будут счастливы.
        </p>
        <p
          className={styles.lowLevelText}
          style={{ color: "var(--dark-color)" }}
        >
          Дизайн-система — это язык, благодаря которому дизайнеры и разработчики
          живут в гармонии
        </p>
      </div>
      <div className={styles.anotherContainer}>
        <h2 className={styles.anotherHeading}>
          Прозрачность процесса и<br></br> синхронизация с бизнесом
        </h2>
        <p className={styles.lowLevelText} style={{ marginTop: "40px" }}>
          Сверяемся с клиентом на каждом этапе, а не молчим несколько месяцев,
          пока не сделаем идеально. После обратной связи обсуждаем варианты
          решения и двигаемся дальше. Спустя одну-две-три итерации макет
          превращается в финальный дизайн.
        </p>
        <ul
          className={styles.points}
          style={{ marginBottom: "0px", rowGap: "20px" }}
        >
          <li className={styles.point}>
            <Star />
            <span>Все видно в Фигме</span>
          </li>
          <li className={styles.point}>
            <Star />
            <span>Арт-директинг</span>
          </li>
          <li className={styles.point}>
            <Star />
            <span>Scrum, Lean, Agile</span>
          </li>
          <li className={styles.point}>
            <Star />
            <span>Дейли, еженедельные отчеты</span>
          </li>
        </ul>
      </div>
      <div className={`${styles.applicationContainer} ${styles.content}`}>
        <h3 className={styles.applicationHeading}>
          Чтобы заказать дизайн под ключ в Минске – свяжитесь с нами.
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

export default UX;
