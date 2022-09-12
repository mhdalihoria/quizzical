import React, { useState, useContext } from "react";

import Question from "../components/Question";
import { ContextObj } from "../Context";
import decodeHtml from "../utils/decode"

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [isFinished, setIsFinished] = useState(false)
  const  {allQuestions} = useContext(ContextObj);

  // console.log(contextObj)
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
        question={decodeHtml(item.question)}
        answers={decodeHtml(item.answers)}
        correctAnswer={decodeHtml(item.correct_answer)}
        isFinished={isFinished}
      />
    );
  });

  return <div className="question-container">{questionElements}</div>;
}

export default Quiz;

/*
{
  "category": "Science: Gadgets",
  "type": "multiple",
  "difficulty": "medium",
  "question": "What are the base station trackers used for the HTC Vive called?",
  "correct_answer": "Lighthouse",
  "incorrect_answers": [
    "Motion",
    "Constellation ",
    "Trackers"
  ]
}


{
  "question": "In the TV show &quot;Cheers&quot;, Sam Malone was a former relief pitcher for which baseball team?",
  "answers": [
    "New York Mets",
    "Baltimore Orioles",
    "Milwaukee Brewers",
    "Boston Red Sox"
  ],
  "correctAnswer": "Boston Red Sox"
}
*/

// the fetching/hook
// the proccess of arranging the array of questions
// give me access to the array of queestions make state to the question element and pass the info thru props
