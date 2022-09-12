import React, {useContext, useRef, useEffect} from "react";
import { ContextObj } from "../Context";
import { shuffleArray } from "../utils/shuffle";

function Question({ question, correctAnswer, answers, isFinished }) {
  let {scoreRef} = useContext(ContextObj)
  let btnRef = useRef()

  //todo:well will do something similar with this to calculate the score
  // function add() {
  //   scoreRef.current++
  //   console.log(scoreRef)
  // }
 

  
  function select(e) {
  
    console.log( btnRef)
  }

  const answerBtns = answers.split(",").map((answer, index) => {
    return (
      <button 
        key={index}
        className="question--answer--option" 
        disabled={isFinished}
        onClick={select}
        ref={btnRef}
        >
        {answer}
      </button>
    );
  });
  return (
    <div className="question">
      <h4 className="question--title">{question}</h4>
      <div className="question--answer">{shuffleArray(answerBtns)}</div>
    </div>
  );
}

export default Question;
