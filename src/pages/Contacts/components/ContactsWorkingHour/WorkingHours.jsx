import React from "react";
import DayWeek from "./components/ContactsDayWeek/DayWeek";
import "./WorkingHours.styles.css";

const WorkingHours = () => {
  const days = [
    { day: "Понедельник", hours: "9:00-17:00" },
    { day: "Вторник", hours: "9:00-17:00" },
    { day: "Среда", hours: "9:00-17:00" },
    { day: "Четверг", hours: "9:00-17:00" },
    { day: "Пятница", hours: "9:00-17:00" },
    { day: "Суббота", hours: "выходной" },
    { day: "Воскресенье", hours: "выходной" },
  ];

  const todayIndex = new Date().getDay() - 1;

  return (
    <div className="working-hours">
      {days.map((dayInfo, index) => (
        <DayWeek
          key={index}
          day={dayInfo.day}
          hours={dayInfo.hours}
          isCurrent={index === todayIndex}
        />
      ))}
    </div>
  );
};

export default WorkingHours;
