import React, { useState, useEffect } from "react";
import "./Reviews.styles.css";
import { getReviews, addReviews } from "@api/services/reviewApi";
import UserReviews from "./components/UserReviews/";
import Review from "./components/Review";
import ReviewsContacts from "./components/Contacts";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const data = await getReviews();
      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  const handleAddReview = async (username, text) => {
    try {
      await addReviews(username, text);
      await fetchReviews(); 
    } catch (error) {
      console.error("Failed to add review:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <UserReviews reviews={reviews} />
      <Review onAddReview={handleAddReview} />
      <ReviewsContacts />
    </div>
  );
};

export default Reviews;
