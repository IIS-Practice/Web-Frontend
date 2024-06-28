import React, { useState, useEffect } from "react";
import "./Cases.styles.scss";
import Case from "./components/Case";
import IMG from "./case_example.svg";
import OutlinedButton from "@components/shared/OutlinedButton";
import { getCases } from "@api/services/caseApi";

const Cases = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const showMoreCases = () => {
    setVisibleCount(cases.length);
  };

  const getClassName = (index) => {
    if (index === 0) return "case-one";
    return index % 8 === 1 || index % 8 === 4 || index % 8 === 5
      ? "case-card-small"
      : "case-card-big";
  };

  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await getCases();
        setCases(data);
      } catch (error) {
        console.error("Failed to fetch specialists:", error);
      }
    };

    fetchCases();
  }, []);

  return (
    <div className="cases-content">
      <h1 className="contact-head">Кейсы</h1>
      <div className="cases-grid">
        {cases.slice(0, visibleCount).map((caseItem) => (
          <Case
            key={caseItem.id}
            image={caseItem.images}
            title={caseItem.name}
            little_description={caseItem.shortDescription}
            link={caseItem.id}
            steps={caseItem.steps}
            className={`case-card ${getClassName(caseItem.id)}`}
          />
        ))}
      </div>
      {visibleCount < cases.length && (
        <div className="button-div">
          <OutlinedButton text="Показать&nbsp;ещё" onClick={showMoreCases} />
        </div>
      )}
    </div>
  );
};

export default Cases;
