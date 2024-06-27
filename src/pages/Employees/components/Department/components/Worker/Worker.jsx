import React from "react";
import "./Worker.styles.scss";

const Worker = ({ wasSelected, worker, onClick }) => {
  return wasSelected ? (
    <div className="white-block"></div>
  ) : (
    <div className="grid-workers-element" onClick={onClick}>
      <div className="image">
        <img src={worker.imageUrl} alt={worker.name} />
      </div>
      <p>
        {worker.surname} {worker.name}
      </p>
    </div>
  );
};

export default Worker;
