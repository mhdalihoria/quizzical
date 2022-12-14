import React, { useContext, useRef, useEffect, useState } from "react";

function Question({question, correctAnswer, answers, selectedAnswer, onChange }) {
  const isDisabled = !!correctAnswer

  const answerBtns = answers.split(",").map((answer, index) => {
    
    const answerStyle =
      isDisabled && answer === correctAnswer
        ? "answer-correct"
        : isDisabled && selectedAnswer === answer && answer !== correctAnswer
        ? "answer-incorrect"
        : isDisabled && selectedAnswer !== answer !== correctAnswer
        ? "answer-unselected"
        : selectedAnswer === answer && "answer-selected";

    return (
      <button
        key={index}
        className={`question--answer--option ${answerStyle}`}
        disabled={isDisabled}
        onClick={(e) => onChange(answer)}
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