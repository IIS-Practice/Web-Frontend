import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WebDev from "./WebDev";
import MobileDev from "./MobileDev";
import BotDev from "./BotDev";
import UX from "./UX";
import { HOME_ROUTE } from "@utils/constants";


const Service = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validServices = ['webDev', 'mobileDev', 'botDev', 'ux'];
    if (!validServices.includes(serviceName)) {
      navigate(HOME_ROUTE);
    }
  }, [serviceName, navigate]);

  const renderServiceContent = () => {
    switch (serviceName) {
      case 'webDev':
        return <WebDev />;
      case 'mobileDev':
        return <MobileDev />;
      case 'botDev':
        return <BotDev />;
      case 'ux':
        return <UX />;
      default:
        return null;
    }
  }
  
  return (
    <div>
      {renderServiceContent()}
    </div>
  );
};

export default Service;
