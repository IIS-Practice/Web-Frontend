import React from "react";
import { Link } from "react-router-dom";
import "./Case.styles.css";
import { CASES_ROUTE } from "@utils/constants";
const Case = ({ image, title, link, className, little_description }) => {
  return (
    <Link
      to={`${CASES_ROUTE}/${link}`}
      className={`case-card ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="case-card-content">
        <h3>{title}</h3>
        <p>{little_description}</p>
      </div>
    </Link>
  );
};

export default Case;
