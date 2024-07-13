import React, { useEffect, useState } from "react";
import "./FAQ.styles.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import { getFaqs } from "@api/services/faqApi";

const FAQ = () => {
  const [questionToDisplay, setQuestionToDisplay] = useState();
  const [faqs, setFaqs] = useState([]);
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqs();
        setFaqs(data);
      } catch (error) {
        console.error("Failed to fetch faqs:", error);
      }
    };

    fetchFaqs();
  }, []);

  useEffect(() => {
    console.log(questionToDisplay);
  }, [questionToDisplay]);

  return (
    <main className="FAQPage">
      <h1>Часто задаваемые вопросы</h1>
      <div className="wrapperFAQ">
        <div className="leftFAQ">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2
                className={
                  index === questionToDisplay
                    ? "question rotateLeftArrow"
                    : "question"
                }
                key={index}
                onClick={() => setQuestionToDisplay(index)}
              >
                {faq.question}
              </h2>
              {isMobile && (
                <div
                  className={
                    index === questionToDisplay
                      ? "showFAQAnswer"
                      : "hideFAQAnswer"
                  }
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {!isMobile && (
          <div className="rightFAQ">
            <h2>
              {
                faqs?.filter((_, index) => index === questionToDisplay)[0]
                  ?.question
              }
            </h2>
            <div>
              {
                faqs?.filter((_, index) => index === questionToDisplay)[0]
                  ?.answer
              }
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default FAQ;
