import React, { useState } from "react";
import { DepartmentButton, Worker, WorkerInfo } from "./components";
import "./Department.styles.scss";
import { ReactComponent as ArrowIcon } from "@assets/arrow.svg";

const Department = ({ departmentName, workers }) => {
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleWorkerClick = (worker) => {
    setSelectedWorker(worker);
  };

  const handleButtonClick = () => {
    if (isVisible) {
      setSelectedWorker(null);
    }
    setIsVisible(!isVisible);
  };

  return (
    <div className="department">
      <div className="button-header">
        <DepartmentButton text={departmentName} onClick={handleButtonClick} />
        <ArrowIcon className={`dropdown-arrow ${isVisible ? "open" : ""}`} />
      </div>

      {selectedWorker && (
        <WorkerInfo worker={selectedWorker} />
      )}

      <div className={`grid-workers ${isVisible ? "visible" : ""}`}>
        {workers.map((worker, index) => (
          <Worker
            key={index}
            wasSelected={selectedWorker && selectedWorker.id === worker.id}
            worker={worker}
            onClick={() => handleWorkerClick(worker)}
          />
        ))}
      </div>
    </div>
  );
};

export default Department;
