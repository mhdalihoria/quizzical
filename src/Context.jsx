import React, { createContext, useState} from "react";
import useFetch from "./hooks/useFetch";

const Context = createContext();

function ContextProvider(props) {
    const fetchObj = useFetch("https://opentdb.com/api.php?amount=5")
    

  return (
    <Context.Provider value={fetchObj}> 
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj};
