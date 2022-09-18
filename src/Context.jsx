import React, { createContext, useState, useRef } from "react";
import useFetch from "./hooks/useFetch";

const Context = createContext();

function ContextProvider(props) {
  

  return (
    <Context.Provider value={''}> 
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj};


// /*

// [
//   {
//     "category": "Entertainment: Video Games",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "Who is the main character in &quot;The Stanley Parable&quot;?",
//     "correct_answer": "Stanley",
//     "incorrect_answers": [
//       "The Adventure Line",
//       "The Narrator",
//       "The Boss"
//     ]
//   },
//   {
//     "category": "Entertainment: Music",
//     "type": "multiple",
//     "difficulty": "medium",
//     "question": "Which of these is NOT a name of an album released by American rapper Pitbull?",
//     "correct_answer": "Welcome to Miami",
//     "incorrect_answers": [
//       "Dale",
//       "Global Warming",
//       "Armando"
//     ]
//   },
//   {
//     "category": "Geography",
//     "type": "multiple",
//     "difficulty": "hard",
//     "question": "What is the area of Vatican City?",
//     "correct_answer": "0.44km^2",
//     "incorrect_answers": [
//       "0.10km^2",
//       "0.86km^2",
//       "12.00km^2"
//     ]
//   },
//   {
//     "category": "Entertainment: Japanese Anime & Manga",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "The name of Junko Enoshima&#039;s imposter at the beginning of Danganronpa: Trigger Happy Havoc is?",
//     "correct_answer": "Mukuro Ikusaba",
//     "incorrect_answers": [
//       "Ryota Mitarai",
//       "Ultimate Imposter",
//       "Komaru Naegi"
//     ]
//   },
//   {
//     "category": "Entertainment: Television",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "In &quot;Breaking Bad&quot;, Walter White is a high school teacher diagnosed with which form of cancer?",
//     "correct_answer": "Lung Cancer",
//     "incorrect_answers": [
//       "Prostate Cancer",
//       "Brain Cancer",
//       "Testicular Cancer"
//     ]
//   }
// ]
// */
