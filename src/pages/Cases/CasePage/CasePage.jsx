import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import ConnectLink from "@components/shared/ConnectLink";
import { differenceInWeeks } from "date-fns";
// import IMG from "../case_example.svg";
import "./CasePage.styles.css";
const CasePage = () => {
  const { caseName } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  // useEffect(() => {
  // Примерные данные о кейсе
  // const exampleCaseData = {
  //   link: "example-case",
  //   services: ["Разработка сайта", "Разработка бота"],
  //   name: "PITA STREET FOOD",
  //   images: [IMG],
  //   complexity: 3,
  //   innerHtml: `
  //     <div class="case-description" style="margin-top: 100px;">
  //       <h2 style="font-size: 1.75rem; font-weight: 600; line-height: 2.133rem; margin-bottom: 60px;">
  //         PITA STREET FOOD
  //       </h2>
  //       <p style="font-size: 1.5rem; font-weight: 400; line-height: 1.828rem; margin-bottom: 15px;">
  //         Специализируется на <br /> кулинарии
  //       </p>
  //     </div>
  //     <div class="project-details-image" style="display: flex; flex-direction: row; margin-bottom: 130px;">
  //       <img style="height: 37.3rem; width: 27.7rem; object-fit: cover; margin-right: 3%;" src="https://avatars.mds.yandex.net/i?id=48a4918289cb9ad4a778c06b628dfd8765dc83a0-12146588-images-thumbs&n=13" alt="Project Details" />
  //       <div class="info" style="display: flex; justify-content: space-between; flex-direction: column;">
  //         <p style="font-size: 1.5rem; font-weight: 400; line-height: 1.828rem; text-align: left;">
  //           Компания “PITA STREET FOOD” обратилась к нам за разработкой полноценного сайта их заведения. В ходе живого общения с нашими специалистами, заказчик четко определился со структурой сайта, также в ТЗ была включена реализация платёжной системы сайта.
  //         </p>
  //         <p style="font-size: 1.5rem; font-weight: 400; line-height: 1.828rem; text-align: left;">
  //           На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реализации, в рамках которых вели дальнейшую разработку проекта.
  //         </p>
  //       </div>
  //     </div>
  //
  //   `,
  //   price: 1000,
  //   startDate: "2024-02-01T12:00:00.000",
  //   endDate: "2024-08-01T12:00:00.000",
  // };

  // if (exampleCaseData.link !== caseName) {
  //   navigate("/cases");
  // } else {
  //   setCaseData(exampleCaseData);
  // }
  // }, [caseName, navigate]);
  useEffect(() => {
    const caseInfo = caseData.find((c) => c.link === caseName);

    if (!caseInfo) {
      navigate("/cases");
    } else {
      setCaseData(caseInfo);
    }
  }, [caseName, navigate, caseData]);

  const getWeeksBetweenDates = (start, end) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end);
    return differenceInWeeks(endDate, startDate);
  };

  return (
    <div>
      {caseData ? (
        <>
          <div className="case-information">
            <h1 className="case-head">
              Кейс {caseData.services.join(", ")} для <br />"{caseData.name}"
            </h1>
            <img
              src={caseData.images[0]}
              alt={caseData.name}
              className="case-image"
            />
            <div
              dangerouslySetInnerHTML={{ __html: caseData.innerHtml }}
            />
          </div>
          <ProjectDetails
            service={caseData.services.join(", ")}
            duration={getWeeksBetweenDates(
              caseData.startDate,
              caseData.endDate
            )}
            level={caseData.complexity}
            price={caseData.price}
          />

          <div className="case-information">
            <ConnectLink
              title="ХОТИТЕ ТАК ЖЕ? МЫ ПОМОЖЕМ!"
              name="Заказать звонок"
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CasePage;