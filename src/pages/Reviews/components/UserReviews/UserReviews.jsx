import React, { useEffect, useState } from "react";
import "./UserReviews.styles.css";
import image1 from "@assets/font.jpg";
import { getReviews } from "@api/services/reviewApi";
import { ReactComponent as LeftButton } from "@assets/leftButton.svg";
import { ReactComponent as RightButton } from "@assets/rightButton.svg";
import { useSwipeable } from "react-swipeable";

const UserReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 512);
  const [reviews, setReviews] = useState([]);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
        setDisableNext(data.length <= (isMobile ? 1 : 4));
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 540);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const newIndex = isMobile ? prevIndex + 1 : prevIndex + 4;
      isMobile ? setDisableNext(newIndex >= reviews.length - 1) : setDisableNext(newIndex >= reviews.length);
      setDisablePrev(newIndex <= 0);
      return newIndex;
    });
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      const newIndex = isMobile ? prevIndex - 1 : prevIndex - 4;
      setDisablePrev(newIndex <= 0);
      setDisableNext(newIndex < reviews.length - 1);
      return newIndex;
    });
  };

  const displayedReviews = isMobile
    ? [reviews[currentReviewIndex]]
    : reviews.slice(currentReviewIndex, currentReviewIndex + 4);

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
          className={`navButton prevButton ${showButtons ? 'show' : ''}`}
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
        <button
          className={`navButton nextButton ${showButtons ? 'show' : ''}`}
          onClick={nextReview}
          disabled={disableNext}
        >
          <RightButton className="btn"/>
        </button>
      </div>
    </div>
  );
};

export default UserReviews;
