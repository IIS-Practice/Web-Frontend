import React, { useState } from "react";
import OutlinedButton from "@components/shared/OutlinedButton";
import ModalForm from "@components/shared/ModalForm";
import styles from "./MobileDev.module.css";

const stagesData = {
  stage1: {
    heading: 'Анализ и планирование',
    description: 'На этапе анализа и планирования мы собираем и документируем все требования к приложению, определяем функциональные ' +
    'и нефункциональные требования, создаем спецификации и технические задания. Это нужно, чтобы убедиться, что все аспекты ' + 
    'приложения продуманы до мелочей и учтены в проекте.'
  },
  stage2: {
    heading: 'Дизайн',
    description: 'Наши дизайнеры создают визуальный стиль приложения, включая выбор цветов, шрифтов и элементов интерфейса. ' +
    'Мы разрабатываем  интерфейс, который улучшит взаимодействие пользователей с вашим приложением. Мы проектируем пользовательский ' +
    'опыт, разрабатывая удобную и интуитивно понятную навигацию и взаимодействия. Мы проводим тестирование прототипов с ' +
    'реальными пользователями, чтобы убедиться, что приложение удобно в использовании.'
  },
  stage3: {
    heading: 'Разработка',
    description: 'Мы используем современные технологии и фреймворки, чтобы обеспечить высокое качество и производительность ' +
    'приложения. Наши backend-разработчики обеспечивают надежную и безопасную работу серверной части, разрабатывают логику ' +
    'обработки данных и интеграцию с внешними сервисами.'
  },
  stage4: {
    heading: 'Тестирование',
    description: 'На этапе функционального тестирования мы проверяем работу всех функций и модулей приложения, чтобы убедиться, ' +
    'что они работают правильно и без ошибок. Это помогает нам выявить проблемы, которые могут возникнуть при реальном ' +
    'использовании, и внести необходимые изменения перед запуском.'
  },
  stage5: {
    heading: 'Запуск',
    description: 'Перед запуском мы оформляем все необходимые материалы для публикации. Затем мы размещаем ваше приложение в ' +
    'магазинах приложений App Store и Google Play. Мы следим за процессом публикации и обеспечиваем соответствие всех требований ' +
    'платформ, чтобы ваше приложение прошло модерацию и стало доступным пользователям.'
  },
  stage6: {
    heading: 'Поддержка и обновление',
    description: 'После публикации приложения мы начинаем тщательно отслеживать его работу с помощью инструментов аналитики. ' +
    'Это позволяет нам получать данные о пользовательской активности, производительности приложения и его стабильности.'
  }
};

const MobileDev = () => {
  const [currentStageKey, setCurrentStageKey] = useState('stage1');
  const [showModal, setShowModal] = useState(false);

  const handleClick = (stageKey) => {
    setCurrentStageKey(stageKey);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const currentStage = stagesData[currentStageKey];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Разработка мобильных приложений</h2>
      <p className={styles.topLevelText}>
        Мы разрабатываем iOS и Android приложения, отвечающие всем требованиям и рекомендациям этих платформ, и обеспечиваем их 
        стабильную работу, чтобы охватить максимальное количество пользователей. 
      </p>
      <p className={styles.topLevelText}>
        Сочетая творчество и технологии, наша компания способна создать удобный и простой в использовании проект, 
        решающий сложные бизнес-задачи.
      </p>
      <div className={styles.stagesContainer}>
        <div className={styles.content}>
          <h3 className={styles.stagesHeading}>
            Этапы разработки приложения
          </h3>
          <div className={styles.pointsAndDescription}>
            <ul className={styles.stagesPoints}>
              {Object.keys(stagesData).map((key) => (
                <li
                  key={key}
                  className={`${styles.point} ${key === currentStageKey ? styles.active : ''}`}
                  onClick={() => handleClick(key)}
                >
                  {stagesData[key].heading}
                </li>
              ))}
            </ul>
            <div className={styles.pointDescription}>
              <h3 className={styles.descriptionHeading}>{currentStage.heading}</h3>
              <p className={styles.stageDescription}>{currentStage.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.applicationContainer} ${styles.content}`}>
        <h3 className={styles.applicationHeading}>
          Чтобы заказать мобильное приложение в Минске – свяжитесь с нами.
        </h3>
        <div>
          <OutlinedButton text="Оставить заявку" onClick={openModal} />
          <ModalForm showModal={showModal} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default MobileDev;
