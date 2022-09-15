import React, { useState, useContext } from "react";

import Question from "../components/Question";
// import { ContextObj } from "../Context";
import useFetch from "../hooks/useFetch";
import decodeHtml from "../utils/decode";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill("")
  );

  const {responseArray, error} = useFetch("https://opentdb.com/api.php?amount=5");

  function setQuestionsArray() {
    if (questions !== responseArray) {
      setQuestions(responseArray);
    }
  }

  setQuestionsArray();

  function getAnswers(index) {
    const answersArray = shuffleArray([
      questions[index].incorrect_answers,
      questions[index].correct_answer,
    ]);

    return answersArray;
  }

  function setSelectedAnswer(index, newSelectedAnswer) {
    setSelectedAnswers((prevSelectedAnswers) => {
      return (prevSelectedAnswers[index] = newSelectedAnswer);
    });
  }

  const questionElements = questions.map((question, index) => {
    return (
      <Question
        key={index}
        id={index}
        question={decodeHtml(question.question)}
        answers={decodeHtml(getAnswers(index))}
        selectedAnswer={selectedAnswers[index]}
        onChange={(answer) => setSelectedAnswer(index, answer)}
        correctAnswer={isFinished ? decodeHtml(question.correctAnswer) : null}
      />
    );
  });

  return (
    <div className="question-container">
      {questionElements}
      <div className="results">
        <button className="checkAnswers" onClick={() => setIsFinished(true)}>
          Check Answers
        </button>
      </div>
    </div>
  );
}

export default Quiz;
