import React, { useEffect, useState } from "react";
import "./FAQ.styles.css";
import { useMediaQuery } from "@uidotdev/usehooks";

const FAQ = () => {
  const [questionToDisplay, setQuestionToDisplay] = useState();
  const [questions, setQuestions] = useState([]);
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");

  useEffect(() => {
    fetch("http://localhost:5186/api/faqs")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.err(err));
  }, []);

  useEffect(() => {
    console.log(questionToDisplay)
  }, [questionToDisplay])

  return (
    <main className="FAQPage">
      <h1>Часто задаваемые вопросы</h1>
      <div className="wrapperFAQ">
        <div
          className="leftFAQ">
          {Object.keys(questions).map((question) => (
            <>
              <h2
                className={
                  question.id === questionToDisplay
                    ? "question rotateLeftArrow"
                    : "question"
                }
                key={question.id}
                onClick={(e) => setQuestionToDisplay(question.id)}
              >
                {question.question}
              </h2>
              {isMobile && (
                <div
                  className={
                    question.id === questionToDisplay
                      ? "showFAQAnswer"
                      : "hideFAQAnswer"
                  }
                >
                  {question.answer}
                </div>
              )}
            </>
          ))}
        </div>
        {!isMobile && (
          <div className="rightFAQ">
            <h2>
              {questions?.filter(
                (question) => question.id === questionToDisplay,
              )[0]?.question}
            </h2>
            <div>
              {questions?.filter(
                (question) => question.id === questionToDisplay,
              )[0]?.answer}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default FAQ;
