import React from "react";
import Quiz from "../components/Quiz";
import { initialState } from "../Context";

function DefaultQuiz() {
  const { count, categoryId } = initialState;
  return (
    <Quiz count={count} categoryId={categoryId}/>
  )
}

export default DefaultQuiz;
