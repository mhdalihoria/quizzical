import React, {useContext} from 'react'
import Quiz from '../components/Quiz'
import { ContextObj } from '../Context'

function CustomQuiz() {
  const {count, categoryId} = useContext(ContextObj)
  
    return (
    <Quiz count={count} categoryId={categoryId}/>
  )
}

export default CustomQuiz