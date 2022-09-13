import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [responseArray, setResponseArray] = useState([])
    function modifyResponse(data) {
        const questions = data.results.map(question => {
            
            return {
                question: question.question,
                answers: [...question.incorrect_answers, question.correct_answer],
                correctAnswer: question.correct_answer,
              };
        })
        
        setResponseArray(questions)
    }


    useEffect(() => {
        async function doFetch() {
          const res = await fetch(url);
          const data = await res.json();
    
          try {
            if (data.response_code === 0) {
              modifyResponse(data)
            }
          } catch (e) {
            console.error(e);
          }
        }
    
        doFetch();
      }, []);

    
  return [responseArray]
}
