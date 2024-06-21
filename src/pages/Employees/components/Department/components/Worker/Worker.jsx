import React from "react";
import "./Worker.styles.scss";

const Worker = ({ wasSelected, worker, onClick }) => {
  return (
    wasSelected ? (
      <div className="white-block"></div>
    ) : (
      <div className="grid-workers-element" onClick={onClick}>
        <div className="square-image-container">
          <div className="square-image">
            <img src={worker.photo} alt={worker.name} />
          </div>
        </div>
        <p>
          {worker.surname} {worker.name}
        </p>
      </div>
    )
  );
};

export default Worker;
