import React, { useCallback, useState } from "react";
import QUESTIONS from "../questions";

const Quiz = () => {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const handleSelectAnswer = (selectedAnwser) => {
    setUserAnswer([...userAnswer, selectedAnwser]);
    console.log(userAnswer);
  };
  console.log(userAnswer);

  return (
    <div id="quiz">
      <div id="question">
        {" "}
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((item) => {
            return (
              <li key={item.answer} className="answer">git init

                <button onClick={() => handleSelectAnswer(item)}>{item}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
