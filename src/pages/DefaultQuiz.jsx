import React from "react";
import Quiz from "../components/Quiz";
import { initialState } from "../Context";

function DefaultQuiz() {
    
  return (
    <Quiz {...initialState}/>
  )
}

export default DefaultQuiz;
