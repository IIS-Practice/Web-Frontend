import React, { useState } from "react";
import { ReactComponent as Star} from '@assets/blueStar.svg';
import styles from "./BotDev.module.css";
import OutlinedButton from "@components/shared/OutlinedButton";
import ModalForm from "@components/shared/ModalForm";

const stagesData = {
  stage1: {
    heading: 'Анализ потребностей',
    description: 'Мы начинаем с детального анализа ваших бизнес-процессов и задач, которые могут быть автоматизированы. Наши ' +
    'специалисты проводят интервью с ключевыми стейкхолдерами и изучают текущие рабочие процессы, чтобы выявить области, где ' +
    'боты могут значительно повысить эффективность и снизить затраты.'
  },
  stage2: {
    heading: 'Проектирование и разработка',
    description: 'Наши эксперты разрабатывают ботов, используя передовые технологии и лучшие практики. Мы создаем интеллектуальные ' +
    'алгоритмы, которые обеспечивают высокую производительность и точность работы ботов.  На этом этапе мы создаем прототипы и ' +
    'макеты, чтобы вы могли увидеть, как будет работать ваш бот. Мы также учитываем все аспекты безопасности данных и конфиденциальности.'
  },
  stage3: {
    heading: 'Интеграция',
    description: 'Мы интегрируем ботов в вашу существующую систему, обеспечивая  совместимость с другими инструментами и платформами. ' +
    'Наши инженеры работают в тесном сотрудничестве с вашей IT-командой, чтобы обеспечить бесшовное подключение и ' +
    'взаимодействие с уже используемыми системами.'
  },
  stage4: {
    heading: 'Тестирование и оптимизация',
    description: 'Каждого бота мы тщательно тестируем, чтобы гарантировать его надежность и эффективность. Мы проводим ' +
    'многоуровневое тестирование, включая функциональное, нагрузочное и пользовательское тестирование, чтобы убедиться, что ' +
    'бот работает без сбоев в любых условиях. После запуска мы продолжаем мониторинг и оптимизацию работы бота, чтобы он всегда ' +
    'оставался актуальным и эффективным. Мы собираем данные о его производительности и вносим необходимые корректировки ' +
    'для улучшения его работы.'
  },
  stage5: {
    heading: 'Поддержка и обновления',
    description: 'Мы предоставляем постоянную поддержку и обновления для наших решений, чтобы ваши боты всегда работали ' +
    'на высшем уровне и соответствовали изменяющимся требованиям бизнеса. Наша команда поддержки всегда готова помочь вам ' +
    'с любыми вопросами или проблемами.'
  }
};

const BotDev = () => {
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
      <h2 className={styles.heading}>Разработка ботов</h2>
      <p className={styles.topLevelText}>
        Мы поможем существенно улучшить ваши бизнес-процессы и взаимодействие с клиентами.
      </p>
      <ul className={styles.items}>
        <li className={styles.item}>
          <Star />
          <span>Уменьшение нагрузки на персонал</span>
        </li>
        <li className={styles.item}>
          <Star />
          <span>Автоматизация рутинных и повторяющихся задач</span>
        </li>
        <li className={styles.item}>
          <Star />
          <span>Повышение эффективности</span>
        </li>
        <li className={styles.item}>
          <Star />
          <span>Увеличение доверия клиентов к бренду</span>
        </li>
      </ul>
      <div className={styles.stagesContainer}>
        <div className={styles.content}>
          <h3 className={styles.stagesHeading}>
            Как мы это делаем?
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
          Свяжитесь с нами, чтобы обсудить возможности разработки ботов для вашего бизнеса.
        </h3>
        <div>
          <OutlinedButton text="Оставить заявку" onClick={openModal} />
          <ModalForm showModal={showModal} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

export default BotDev;
