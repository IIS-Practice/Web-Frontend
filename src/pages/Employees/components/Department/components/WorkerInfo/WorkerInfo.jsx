import React from "react";
import "./WorkerInfo.styles.scss";

const WorkerInfo = ({ worker }) => {
  return (
    <div className="worker-info">
      <div className="image-container">
        <div className="image">
          <img src={worker.imageUrl} alt={worker.name} />
        </div>
      </div>
      <div className="worker-properties">
        <p>
          {worker.surname} {worker.name}
        </p>
        <p>{worker.description}</p>
        <button
          className="cv-btn"
          onClick={() => window.open(worker.cvUri, "_blank")}
        >
          Посмотреть резюме
        </button>
      </div>
    </div>
  );
};

export default WorkerInfo;
