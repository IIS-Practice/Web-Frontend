import React from 'react';
import './UserReviews.styles.css';

const UserReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Иван Иванов",
      image: "path/to/image1.jpg",
      review: "Отличная компания, очень доволен сотрудничеством!",
    },
    {
      id: 2,
      name: "Мария Смирнова",
      image: "path/to/image2.jpg",
      review: "Очень профессиональный подход, рекомендую!",
    },
    {
      id: 3,
      name: "Алексей Петров",
      image: "path/to/image3.jpg",
      review: "Высокий уровень сервиса и поддержки.",
    },
    {
      id: 4,
      name: "Елена Кузнецова",
      image: "path/to/image4.jpg",
      review: "Превзошли все мои ожидания!",
    },
  ];

  return (
    <div className="mainBlock">
      <div className="contentBlock">
        <div className="nameBlock">
          <h2>Прочтите, что говорят наши клиенты</h2>
        </div>
        <div className="navigation">
          <button className="navButton">{"<"}</button>
          <div className="usersBlock">
            {reviews.map((review) => (
              <div key={review.id} className="userReview">
                <img src={review.image} alt={`${review.name}`} className="userImage" />
                <div className="userInfo">
                  <p className="userName">{review.name}</p>
                  <p className="userReviewText">{review.review}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="navButton">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
