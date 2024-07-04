import React, { useEffect, useState, useCallback } from "react";
import "./UserReviews.styles.css";
import image1 from "@assets/font.jpg";
import { getReviews } from "@api/services/reviewApi";
import { ReactComponent as LeftButton } from "@assets/leftButton.svg";
import { ReactComponent as RightButton } from "@assets/rightButton.svg";
import { useSwipeable } from "react-swipeable";

const UserReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [viewport, setViewport] = useState(
    window.innerWidth <= 640 ? "mobile" : window.innerWidth <= 1024 ? "tablet" : "desktop"
  );
  const [reviews, setReviews] = useState([]);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const updateDisableButtons = useCallback((length) => {
    const increment = viewport === "mobile" ? 1 : viewport === "tablet" ? 2 : 4;
    setDisableNext(length <= increment);
    setDisableNext(currentReviewIndex >= length - increment)
    setDisablePrev(currentReviewIndex === 0);
  }, [viewport, currentReviewIndex]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
        updateDisableButtons(data.length);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [viewport, updateDisableButtons]);

  useEffect(() => {
    const handleResize = () => {
      setViewport(
        window.innerWidth <= 640
          ? "mobile"
          : window.innerWidth <= 1024
          ? "tablet"
          : "desktop"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const increment = viewport === "mobile" ? 1 : viewport === "tablet" ? 2 : 4;
      const newIndex = prevIndex + increment;
      setDisableNext(newIndex >= reviews.length - increment);
      setDisablePrev(newIndex <= 0);
      return newIndex;
    });
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const decrement = viewport === "mobile" ? 1 : viewport === "tablet" ? 2 : 4;
      const newIndex = prevIndex - decrement;
      setDisablePrev(newIndex <= 0);
      setDisableNext(newIndex > reviews.length - decrement);
      return newIndex;
    });
  };

  const displayedReviews = (() => {
    if (viewport === "mobile") {
      return [reviews[currentReviewIndex]];
    } 
    if (viewport === "tablet") {
      const startIndex = currentReviewIndex % 2 ? currentReviewIndex - 1 : currentReviewIndex;
      return reviews.slice(startIndex, startIndex + 2);
    } 
    if (viewport === "desktop") {
      const startIndex = currentReviewIndex % 4 ? currentReviewIndex - (currentReviewIndex % 4) : currentReviewIndex;
      return reviews.slice(startIndex, startIndex + 4);
    }
})();

      
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (!disableNext) nextReview();
      handleSwipe();
    },
    onSwipedRight: () => {
      if (!disablePrev) prevReview();
      handleSwipe();
    },
    trackMouse: true,
  });

  const handleSwipe = () => {
    setShowButtons(true);
    setTimeout(() => setShowButtons(false), 2000);
  };

  return (
    <div className="user-reviews-container" {...swipeHandlers}>
      <div className="nameBlock">
        <h2>Прочтите, что говорят наши клиенты</h2>
      </div>
      <div className="navigationBlock">
          <button
            className={`navButtonReview prevButton ${!disablePrev && (showButtons || viewport !== 'mobile') ? 'show' : ''}`}
            onClick={prevReview}
            disabled={disablePrev}
          >
            <LeftButton />
          </button>
        <div className="usersBlock">
          {displayedReviews.map((review) => (
            <div key={review.reviewId} className="userReview">
              <div className="userHeader">
              
                <img
                  src={image1}
                  alt={`${review.username}`}
                  className="userImage"
                />
                <div className="userContent">
                  <p className="userName">{review.username}</p>
                  <p className="userReviewText">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        { (
          <button
            className={`navButtonReview nextButton ${!disableNext && (showButtons || viewport !== 'mobile') ? 'show' : ''}`}
            onClick={nextReview}
            disabled={disableNext}
          >
            <RightButton className="btn"/>
          </button>
        )}
      </div>
    </div>
  );
};

export default UserReviews;
