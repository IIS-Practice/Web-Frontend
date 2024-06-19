import React from "react";
import "./Reviews.styles.css";
import UserReviews from "./UserReviews/UserReviews";
import Review from "./Review/Review";
import ReviewsContacts from "./Contacts/ReviewsContacts";

const Reviews = () => {
  return (
    <div>
      <UserReviews/>
      <Review/>
      <ReviewsContacts/>
    </div>
  );
};

export default Reviews;
