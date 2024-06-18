import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HOME_ROUTE, SERVICES } from "@utils/constants";

const Service = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [ServiceComponent, setServiceComponent] = useState(null);

  useEffect(() => {
    const service = SERVICES[serviceName];

    if (!service) {
      navigate(HOME_ROUTE);
    } else {
      import(`./components/${service.component}`)
        .then((module) => {
          setServiceComponent(() => module.default);
        })
        .catch(() => {
          navigate(HOME_ROUTE);
        });
    }
  }, [serviceName, navigate]);

  return <div>{ServiceComponent ? <ServiceComponent /> : <p></p>}</div>;
};

export default Service;
