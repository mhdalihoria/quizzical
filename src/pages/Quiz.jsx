import React, { useState, useContext, useRef } from "react";
import {useNavigate } from "react-router-dom";

import Question from "../components/Question";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import { ContextObj } from "../Context";
import useFetch from "../hooks/useFetch";
import decodeHtml from "../utils/decode";
import { shuffleArray } from "../utils/shuffle";

function Quiz() {
  // const { response, error } = useFetch("https://opentdb.com/api.php?amount=5");
  const {fetchObj} = useContext(ContextObj)
  const {response, error} = fetchObj
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();
  let score;


  const [selectedAnswers, setSelectedAnswers] = useState([]);
  if (!selectedAnswers.length && response) {
    setSelectedAnswers(new Array(response?.results.length).fill(""));
  }

  const questions = useRef();
  if (!questions.current && response) {
    questions.current = response?.results.map((question) => ({
      ...question,
      answers: shuffleArray([
        question.correct_answer,
        question.incorrect_answers,
      ]),
    }));
  }

  function setSelectedAnswer(questionIndex, newSelectedAnswer) {
    setSelectedAnswers((prevSelectedAnswers) => {
      const selectedAnswers = prevSelectedAnswers.slice();
      selectedAnswers[questionIndex] = newSelectedAnswer;
      return selectedAnswers;
    });
  }

  if (isFinished) {
    score = 0;
    for (let i = 0; i < questions.current.length; i++) {
      score +=
        questions.current[i].correct_answer === selectedAnswers[i] ? 1 : 0;
    }
  }
  
  const questionElements = questions.current?.map((question, index) => {
    return (
      <Question
        key={index}
        question={decodeHtml(question.question)}
        answers={decodeHtml(question.answers)}
        selectedAnswer={selectedAnswers[index]}
        onChange={(answer) => setSelectedAnswer(index, answer)}
        correctAnswer={isFinished ? decodeHtml(question.correct_answer) : null}
      />
    );
  });

  if (error) {
    return <Error error={error} />;
  }

  if (!response && !error) {
    return <Spinner />;
  }

  return (
    <div className="question-container">
      {questionElements}
      <div className="results">
        {!isFinished ? (
          <button 
            className="check-answers" 
            onClick={() => setIsFinished(true)}
            disabled={selectedAnswers.some(answer => answer === '') ? true : false}
            >
            Check Answers
          </button>
        ) : (
          <>
            <span>
              Correct Answers: {score}/{questions.current.length}
            </span>
            <button className="play-again-btn" onClick={() => navigate("/")}>
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
