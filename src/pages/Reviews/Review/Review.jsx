import React from "react";
import "./Review.styles.css";

const Review = () => {
  return (
    <div className="MainBlock">
        <div className="ContentBlock">  
            <form className="FormBlock" action="#" method="post" encType="multipart/form-data">
                <h2 className="ContentText">
                    Вы можете оставить свой отзыв
                </h2>
                <div>
                    <input className="ContentInputName" type="text" name="userName" placeholder="Имя" /> 
                </div>
                <div className="ContentTextarea">
                    <textarea placeholder="Что вам понравилось?" name="Review"></textarea>
                </div>
                <div>
                    <button className="SubmitButton" type="submit">
                        Отправить
                    </button>
                </div>
            </form>
        </div>   
    </div>
  );
};

export default Review;
