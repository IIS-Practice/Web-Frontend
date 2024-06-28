import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { casesData } from "../Cases";
import "./CasePage.styles.css";
import ProjectDetails from "./components/ProjectDetails";
import ConnectLink from "@components/shared/ConnectLink";

const CasePage = () => {
  const { caseName } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);

  useEffect(() => {
    const caseInfo = caseData.find((c) => c.link === caseName);

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
            <h1 className="case-head">
              Кейс {caseData.service} для <br></br> "{caseData.name}"
            </h1>
            <img
              src={caseData.images[0]}
              alt={caseData.name}
              className="case-image"
            />
            {/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa*/}
            <div className="case-description" style={{ marginTop: "100px", fontSize: "16px" }}>
              <h2 style={{
                fontSize: "35px",
                fontWeight: "600",
                lineHeight: "43px",
                marginBottom: "60px"
            }}>PITA STREET FOOD </h2>
              <p style={{ fontSize: "30px", fontWeight: "400", lineHeight: "37px", marginBottom: "15px" }}>
                Специализируется на <br></br> кулинарии
              </p>
            </div>
            <div className="project-details-image"
                 style={{ display: "flex", flexDirection: "row", marginBottom: "130px" }}>
              <img style={{ height: "746px", width: "554px", objectFit: "cover", marginRight: "33px" }}
                   src="https://avatars.mds.yandex.net/i?id=48a4918289cb9ad4a778c06b628dfd8765dc83a0-12146588-images-thumbs&n=13"
                   alt="Project Details"
              />
              <div className="info"
                   style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                <p style={{
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "37px",
                  textAlign: "left"
                }}>Компания “PITA STREET FOOD”обратилась к нам за разработкой полноценного сайта их заведения. В ходе живого общения с нашими специалистами, заказчик четко определился со структурой сайта, также в ТЗ была включена реализация платёжной системы сайта.</p>
                <p style={{
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "37px",
                  textAlign: "left"
                }}>На ранних этапах сотрудничества, мы составили поэтапную смету, промежуточные сроки реалиазции,
                  в рамках которых, вели
                  дальнейшую разработку проекта.</p>
              </div>
            </div>
          </div>
          <div>
            {/*{caseData.inner_html}*/}
            {/*AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA*/}
            <ProjectDetails
              service={caseData.service}
              duration={caseData.duration}
              level={caseData.level}
              price={caseData.price}
            />
          </div>
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
