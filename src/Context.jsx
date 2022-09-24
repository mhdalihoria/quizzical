import React, { createContext, useState} from "react";

const Context = createContext();

const initialState ={
  count: 5, 
  categoryId: "9"
}

function ContextProvider(props) {
  const [count, setCount] = useState(initialState.count);
  const [categoryId, setCategoryId] = useState(initialState.categoryId);
  const settingsContext = {count, setCount, categoryId, setCategoryId};


  return (

    <Context.Provider value={settingsContext}> 

        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj, initialState};
