import React, { createContext, useState} from "react";
import useFetch from "./hooks/useFetch";

const Context = createContext();

function ContextProvider(props) {
    // const fetchObj = useFetch("https://opentdb.com/api.php?amount=5")

    const [fetchObj, setFetchObj] = useState(useFetch("https://opentdb.com/api.php?amount=5"))

    function apiCall(amount = "amount=5", category = "") {
        return useFetch(`https://opentdb.com/api.php?${amount}&${category}`)
    }
    

  return (
    <Context.Provider value={{fetchObj, apiCall}}> 
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj};
