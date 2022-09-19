import React, { createContext, useState} from "react";
import useFetch from "./hooks/useFetch";

const Context = createContext();

function ContextProvider(props) {
    // const fetchObj = useFetch("https://opentdb.com/api.php?amount=5")
// s
    function apiCall(amount = "amount=5", category = "") {
        return useFetch(`https://opentdb.com/api.php?${amount}&${category}`)
    }
    

  return (
    <Context.Provider value={apiCall()}> 
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj};
