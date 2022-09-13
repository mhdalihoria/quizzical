import React, { useState, useContext } from "react";

import Question from "../components/Question";
import { ContextObj } from "../Context";
import decodeHtml from "../utils/decode";
import { shuffleArray } from "../utils/shuffle";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const { allQuestions } = useContext(ContextObj);

  function setQuestionsArray() {
    if (questions !== allQuestions) {
      setQuestions(allQuestions);
    }
  }

  setQuestionsArray();

  const questionElements = questions.map((item, index) => {
    return (
      <Question
        key={index}
        id={index}
        question={decodeHtml(item.question)}
        answers={decodeHtml(item.answers)}
        correctAnswer={decodeHtml(item.correctAnswer)}
        isFinished={isFinished}
      />
    );
  });

  return (
    <div className="question-container">
      {questionElements}
      <div className="results">
        <button className="checkAnswers" onClick={()=>setIsFinished(true)}>Check Answers</button>
      </div>
    </div>
  );
}

export default Quiz;
