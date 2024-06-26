import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { casesData } from "../Cases";
import "./CasePage.styles.css";
import ProjectDetails from "./components/ProjectDetails";
import ConnectLink from "@components/shared/ConnectLink";

const CasePage = () => {
  const { caseName } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {

    const caseInfo = casesData.find((c) => c.link === caseName);

    if (!caseInfo) {
      navigate("/cases");
    } else {
      setCaseData(caseInfo);
    }
  }, [caseName, navigate]);

  return (
    <div>
      {caseData ? (
        <>
          <div className="case-information">
            <h1 className="case-head">Кейс {caseData.service} для <br></br> "{caseData.title}"</h1>
            <img src={caseData.image} alt={caseData.title} className="case-image" />
            <div className="case-description">
              <h2>{caseData.title}</h2>
              <p>Специализируется на <br></br> {caseData.specialization}</p>
            </div>
            <div className="project-details-image">
              <img
                src="https://avatars.mds.yandex.net/i?id=48a4918289cb9ad4a778c06b628dfd8765dc83a0-12146588-images-thumbs&n=13"
                alt="Project Details" />
              <div className="info">
                <p>{caseData.description}</p>
                <p>{caseData.steps}</p>
              </div>
          </div>

          </div>
          <div>
            <ProjectDetails
              service={caseData.service}
              duration={caseData.duration}
              level={caseData.level}
              price={caseData.price}
            />
          </div>
          <div className="case-information">
            <ConnectLink title="ХОТИТЕ ТАК ЖЕ? МЫ ПОМОЖЕМ!" name="Заказать звонок" />
          </div>


        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default CasePage;
