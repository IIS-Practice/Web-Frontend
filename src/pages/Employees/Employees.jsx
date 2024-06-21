import React, { useEffect, useState } from "react";
import "./Employees.styles.scss";
import { TextBox, Department } from "./components";
import { getSpecialists } from "@api/services/specialistApi";

const Employees = () => {
  const TextData = [
    {
      text1:
        "В компании работают настоящие профессионалы своего дела." +
        " Каждый из сотрудников обладает высокой квалификацией," +
        " обширными знаниями и многолетним опытом." +
        " Они готовы решать самые сложные задачи и" +
        " всегда стремятся превзойти ожидания клиентов." +
        " Сплоченный коллектив позволяет достигать поставленных целей" +
        " и радовать клиентов высоким качеством обслуживания.",

      text2:
        " Мы  гордимся  своей  командой  и  уверены  в  том,  что  она  способна  превзойти  ожидания  любого  клиента.",
    },
  ];

  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const data = await getSpecialists();
        setSpecialists(data);
      } catch (error) {
        console.error("Failed to fetch specialists:", error);
      }
    };

    fetchSpecialists();
  }, []);

  const categorizeSpecialists = () => {
    const developers = [];
    const designers = [];
    const analysts = [];

    specialists.forEach((specialist) => {
      if (specialist.position === "Разработчик") {
        developers.push(specialist);
      } else if (specialist.position === "Дизайнер") {
        designers.push(specialist);
      } else if (specialist.position === "Аналитик") {
        analysts.push(specialist);
      }
    });

    return { developers, designers, analysts };
  };

  const { developers, designers, analysts } = categorizeSpecialists();

  return (
    <div className="employees-page">
      <div className="text-blocks">
        {TextData.map((text, index) => (
          <TextBox key={index} text1={text.text1} text2={text.text2} />
        ))}
      </div>

      <div className="departments-blocks">
        <Department departmentName="Разработчики" workers={developers} />
        <Department departmentName="Дизайнеры" workers={designers} />
        <Department departmentName="Аналитики" workers={analysts} />
      </div>
    </div>
  );
};

export default Employees;
