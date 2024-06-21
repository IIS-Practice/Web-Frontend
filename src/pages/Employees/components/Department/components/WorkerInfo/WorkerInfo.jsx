import React from "react";
import "./WorkerInfo.styles.scss";

const WorkerInfo = ({ worker }) => {
  return (
    <div className="worker-info">
      <div className="square-image-container">
        <div className="square-image">
          <img src={worker.photo} alt={worker.name} />
        </div>
      </div>
      <div className="worker-properties">
        <p>
          {worker.surname} {worker.name}
        </p>
        <p>{worker.technologies}</p>
        <button className="cv-btn">Посмотреть резюме</button>
      </div>
    </div>
  );
};

export default WorkerInfo;
