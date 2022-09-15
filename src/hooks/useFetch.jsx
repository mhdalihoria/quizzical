import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffle";

export default function useFetch(url) {
  const [responseArray, setResponseArray] = useState([]);
  // function modifyResponse(data) {
  // const questions = data.results.map(question => {

  //     return {
  //         question: question.question,
  //         answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
  //         correctAnswer: question.correct_answer,
  //       };
  // })

  function changeResponseArray(questions) {
    setResponseArray(questions);
  }

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(url);
      const data = await res.json();

      try {
        if (data.response_code === 0) {
          changeResponseArray(data);
        }
      } catch (e) {
        console.error(e);
      }
    }

    doFetch();
  }, []);

  return [responseArray];
}
