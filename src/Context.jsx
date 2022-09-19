import React, { createContext, useState} from "react";
import useFetch from "./hooks/useFetch";

const Context = createContext();

function ContextProvider(props) {
  const [count, setCount] = useState(5);
  const [categoryId, setCategoryId] = useState('15');
  const settingsContext = {count, setCount, categoryId, setCategoryId};

    

  return (
    <Context.Provider value={settingsContext}> 
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj};
