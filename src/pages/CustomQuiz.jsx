import React, {useContext} from 'react'
import Quiz from '../components/Quiz'
import { ContextObj } from '../Context'

function CustomQuiz() {
  const context = useContext(ContextObj)
  
    return (
    <Quiz {...context}/>
  )
}

export default CustomQuiz