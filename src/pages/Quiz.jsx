import React, { useState, useContext, useRef } from "react";

import Question from "../components/Question";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
// import { ContextObj } from "../Context";
import useFetch from "../hooks/useFetch";
import decodeHtml from "../utils/decode";
import { shuffleArray } from "../utils/shuffle";

function Quiz() {
  const {response, error} = useFetch("https://opentdb.com/api.php?amount=5");
  const [isFinished, setIsFinished] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  if (!selectedAnswers.length && response) {
    setSelectedAnswers(new Array(response?.results.length).fill(""))
  }

  const questions = useRef()
  if (!questions.current && response) {
    questions.current = response?.results.map(question => ({
      ...question,
      answers: shuffleArray([
        question.correct_answer,
        question.incorrect_answers
      ]),
    }))
  }

  function setSelectedAnswer(questionIndex, newSelectedAnswer) {
    setSelectedAnswers((prevSelectedAnswers) => {
      const selectedAnswers = prevSelectedAnswers.slice()
      selectedAnswers[questionIndex] = newSelectedAnswer;
      return selectedAnswers
    });
  }

  const questionElements = questions.current?.map((question, index) => {
    return (
      <Question
        key={index}
        question={decodeHtml(question.question)}
        answers={decodeHtml(question.answers)}
        selectedAnswer={selectedAnswers[index]}
        onChange={(answer) => setSelectedAnswer(index, answer)}
        correctAnswer={isFinished ? decodeHtml(question.correctAnswer) : null}
      />
    );
  });

  if(error) {
    return <Error error={error} />
  }

  if(!response && !error) {
    return <Spinner />
  }


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
