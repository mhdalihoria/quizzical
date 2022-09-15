import React, { useState, useContext } from "react";

import Question from "../components/Question";
import { ContextObj } from "../Context";
import decodeHtml from "../utils/decode";
import { shuffleArray } from "../utils/shuffle";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(''))
  const { allQuestions } = useContext(ContextObj);

  function setQuestionsArray() {
    if (questions !== allQuestions) {
      setQuestions(allQuestions);
    }
  }
  setQuestionsArray();

  function getAnswers(index) {
    const answersArray = questions[index].answers
    return answersArray
  }

  function setSelectedAnswer(index, newSelectedAnswer) {
    setSelectedAnswers(prevSelectedAnswers => {
      return prevSelectedAnswers[index] = newSelectedAnswer
    })
  }

  const questionElements = questions.map((question, index) => {
    return (
      <Question
        key={index}
        id={index}
        question={decodeHtml(question.question)}
        answers={decodeHtml(getAnswers(index))}
        selectedAnswer={selectedAnswers[index]}
        onChange={answer => setSelectedAnswer(index, answer)}
        correctAnswer={isFinished ? decodeHtml(question.correctAnswer) : null}
        isFinished = {isFinished}
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
