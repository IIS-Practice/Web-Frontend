import React from "react";
import "./DayWeek.styles.css";

const DayWeek = ({ day, hours, isCurrent }) => {
  return (
    <div className={`day-week ${isCurrent ? "current" : ""}`}>
      <div className="day">{day}</div>
      <div className="hours">{hours}</div>
    </div>
  );
};

export default DayWeek;
