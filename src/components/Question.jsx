import React, { useContext, useRef, useEffect, useState } from "react";
import { ContextObj } from "../Context";

function Question({id, question, correctAnswer, answers, selectedAnswer, onChange, isFinished }) {
  // const [selectedAnswer, setSelectedAnswer] = useState()
  let { updateScore , score } = useContext(ContextObj);

  // function selectAnswer(e, answer) {
  //   setSelectedAnswer(answer)
  // }

  
  const answerBtns = answers.split(",").map((answer, index) => {
    console.log(onChange(answer))
    
    const answerStyle =
      isFinished && answer === correctAnswer
        ? "answer-correct"
        : isFinished && selectedAnswer === answer && answer !== correctAnswer
        ? "answer-incorrect"
        : isFinished && selectedAnswer !== answer !== correctAnswer
        ? "answer-unselected"
        : selectedAnswer === answer && "answer-selected";

    return (
      <button
        key={index}
        className={`question--answer--option ${answerStyle}`}
        disabled={isFinished}
        onClick={(e) => console.log(onChange(answer))}
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