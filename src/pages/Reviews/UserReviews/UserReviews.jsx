import React, { useEffect, useState } from "react";
import "./UserReviews.styles.css";
import image1 from "../../../../src/assets/font.jpg";

const reviews = [
  {
    id: 1,
    name: "Иван Иванов",
    image: image1,
    review: "Отличная компания ",
  },
  {
    id: 2,
    name: "Мария Смирнова",
    image: image1,
    review: "Очень профессиональный подход, рекомендую!",
  },
  {
    id: 3,
    name: "Алексей Петров",
    image: image1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti accusantium, nihil numquam laboriosam fugit nobis doloremque vero reprehenderit non dicta, beatae minus perspiciatis. Iste quaerat ut illum voluptatum laborum, laboriosam velit esse nisi veniam commodi soluta officiis quam repellat error debitis perferendis ex reiciendis maxime sed porro optio laudantium?",
  },
  {
    id: 4,
    name: "Елена Кузнецова",
    image: image1,
    review: "Превзошли все мои ожидания!",
  },
];

const UserReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 512);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 512);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      isMobile
        ? (prevIndex + 1) % reviews.length
        : (prevIndex + 4) % reviews.length
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + reviews.length) % reviews.length
        : (prevIndex - 4 + reviews.length) % reviews.length
    );
  };

  const displayedReviews = isMobile
    ? [reviews[currentReviewIndex]]
    : reviews.slice(currentReviewIndex, currentReviewIndex + 4);

  return (
    <div>
      <div className="nameBlock">
        <h2>Прочтите, что говорят наши клиенты</h2>
      </div>
      <div className="navigationBlock">
        <button className="navButton prevButton" onClick={prevReview}>
          {"<"}
        </button>
        <div className="usersBlock">
          {displayedReviews.map((review) => (
            <div key={review.id} className="userReview">
              <div className="userHeader">
                <img
                  src={review.image}
                  alt={`${review.name}`}
                  className="userImage"
                />
                <div className="userContent">
                  <p className="userName">{review.name}</p>
                  <p className="userReviewText">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="navButton nextButton" onClick={nextReview}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default UserReviews;
