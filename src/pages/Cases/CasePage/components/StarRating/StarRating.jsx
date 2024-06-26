import React from 'react';
import { ReactComponent as BlueStar } from "@assets/blue_star.svg"
import { ReactComponent as WhiteStar } from "@assets/white_star.svg"
import './StarRating.styles.css';

const StarRating = ({ level }) => {
  return (
    <div className="star-rating">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="star">
          {i < level ? <BlueStar /> : <WhiteStar />}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
