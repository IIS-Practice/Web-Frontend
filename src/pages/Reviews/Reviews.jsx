import React from "react";
import "./Reviews.styles.css";
import { ReviewsContacts, Review, UserReviews } from "./components";

const Reviews = () => {
  return (
    <div>
      <UserReviews />
      <Review />
      <ReviewsContacts />
    </div>
  );
};

export default Reviews;
