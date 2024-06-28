import React from "react";
import "./ProjectDetails.styles.css";
import StarRating from "../StarRating/StarRating";

const ProjectDetails = ({ service, duration, level, price }) => {
  return (
    <div className="project-details">
      <div className="project-details-info">
        <p>{service}</p>
        <p>
          Реализация проекта заняла <strong>{duration} недель</strong>{" "}
        </p>
        <div className="project-complexity">
          <p>Сложность проекта </p>
          <StarRating level={level} />
        </div>
        <p>
          Стоимость проекта<strong className="price-p">{price}$</strong>
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
