import React, { useState } from "react";
import "./Review.styles.scss";

const Review = ({ onAddReview }) => {
  const [text, setText] = useState("");
  const [username, setUserName] = useState("");
  const maxLengthText = 300;
  const maxLengthName = 30;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSendReview = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await onAddReview(username, text);
      setUserName("");
      setText("");
    } catch (error) {
      console.log(error);

      if (error.status === 400) {
        setErrors(error.errors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="MainBlockReview">
      <div className="ContentBlock">
        <form
          className="FormBlock"
          action="#"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleSendReview}
        >
          <h2 className="ContentText">Вы можете оставить свой отзыв</h2>
          <div>
            <input
              className="ContentInputName"
              type="text"
              name="userName"
              placeholder="Имя"
              required
              maxLength={maxLengthName}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              style={{
                borderColor: errors.Username ? "var(--error-color)" : "initial",
              }}
            />
          </div>
          <div className="ContentTextarea">
            <textarea
              placeholder="Что вам понравилось?"
              name="Review"
              maxLength={maxLengthText}
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                borderColor: errors.Text ? "var(--error-color)" : "initial",
              }}
            ></textarea>
          </div>
          <div>
            <button
              className="SubmitButton"
              type="submit"
              disabled={isSubmitting}
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
