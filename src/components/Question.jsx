import React, { useContext, useRef, useEffect, useState } from "react";
import { ContextObj } from "../Context";

function Question({id, question, correctAnswer, answers, isFinished }) {
  const [selectedAnswer, setSelectedAnswer] = useState()
  let { updateScore , score } = useContext(ContextObj);

  function selectAnswer(e, answer) {
    setSelectedAnswer(answer)
  }

  const answerBtns = answers.split(",").map((answer, index) => {
    // if the game is finished, and I have an answer selected, and I have an answer, that matches the value of the correct answer give me access to: 
      if (isFinished && isChecked[index] && answer === correctAnswer) {
        // updateScore(1)
      }
      console.log(score);
    
    const answerStyle =
      isFinished && answer === correctAnswer
        ? "answer-correct"
        : isFinished && isChecked[index] && answer !== correctAnswer
        ? "answer-incorrect"
        : isFinished && !isChecked[index] && answer !== correctAnswer
        ? "answer-unselected"
        : isChecked[index] && "answer-selected";

    return (
      <button
        key={index}
        className={`question--answer--option ${answerStyle}`}
        disabled={isFinished}
        onClick={(e) => selectAnswer(e, answer)}
        value={answer}
      >
        {answer}
      </button>
    );
  });
  return (
    <div className="question">
      <h4 className="question--title">{question}</h4>
      <div className="question--answer">{answerBtns}</div>
    </div>
  );
}

export default Question;