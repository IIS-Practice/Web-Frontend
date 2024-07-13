import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import ConnectLink from "@components/shared/ConnectLink";
import { differenceInWeeks } from "date-fns";
import "./CasePage.styles.css";
import { getCase } from "@api/services/caseApi";

const CasePage = () => {
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const getCaseIdFromUrl = () => {
      const pathname = window.location.pathname;
      const regex = /\/cases\/([a-f0-9-]+)/;
      const match = pathname.match(regex);
      return match ? match[1] : null;
    };

    const caseId = getCaseIdFromUrl();

    const fetchData = async () => {
      try {
        const data = await getCase(caseId);

        if (!data) {
          navigate("/cases");
        } else {
          setCaseData(data);
        }
      } catch (error) {
        console.error("Failed to fetch case data:", error);
        navigate("/cases");
      }
    };

    fetchData();
  }, [navigate]);

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
            <div dangerouslySetInnerHTML={{ __html: caseData.innerHtml }} />
          </div>
          <ProjectDetails
            service={caseData.services.join(", ")}
            duration={getWeeksBetweenDates(
              caseData.startDate,
              caseData.endDate,
            )}
            level={caseData.complexity}
            price={caseData.cost}
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
