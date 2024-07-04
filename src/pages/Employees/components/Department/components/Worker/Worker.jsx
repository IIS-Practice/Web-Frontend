import React, { useState } from "react";
import "./Worker.styles.scss";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";

const Worker = ({ wasSelected, worker, onDesktopClick }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleToggleInfo = (e) => {
    e.stopPropagation();
    setIsInfoVisible(!isInfoVisible);
  };

  const handleClick = (e) => {
    if (window.innerWidth < 768) {
      handleToggleInfo(e);
    } else {
      onDesktopClick();
    }
  };

  return wasSelected ? (
    <div className="white-block"></div>
  ) : (
    <div className="grid-workers-element" onClick={handleClick}>
      <div className="image">
        <img src={worker.imageUrl} alt={worker.name} />
      </div>

      <p className="desktop-title">
        {worker.surname} {worker.name}
      </p>
      <button className="mobile-title" onClick={handleToggleInfo}>
        <span className="worker-name">
          <span>{worker.surname}</span>
          <span>{worker.name} </span>
        </span>
        <ArrowIcon />
      </button>

      {isInfoVisible && (
        <div className="worker-info-mobile">
          <p>{worker.description}</p>
          <button
            className="cv-btn"
            onClick={() => window.open(worker.cvUri, "_blank")}
          >
            Посмотреть резюме
          </button>
        </div>
      )}
    </div>
  );
};

export default Worker;
