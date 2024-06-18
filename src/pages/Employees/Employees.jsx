import React from "react";
import "./Employees.styles.css";
import TextBox from "../Employees/components/TextBox";
import Departments from "./components/Departments";
import Button from "./components/Button";


const Employees = () => {
  const EmployeesData = [
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
            " Мы  гордимся  своей  командой  и  уверены  в  том,  что  она  способна  превзойти  ожидания  любого  клиента."

    },
  ];

  return (
      <div className="employees-page">
        <div className="text-blocks">
            {EmployeesData.map((contact, index) => (
                <TextBox
                    key={index}
                    text1={contact.text1}
                    text2={contact.text2}

                />
            ))}


            <div className="btn-blocks">
                <Button/>
            </div>

        </div>

          <div className="departments-blocks">
              <Departments/>
          </div>


      </div>


  )
};

export default Employees;
