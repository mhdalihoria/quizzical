import React, { createContext, useState} from "react";
import useFetch from "./hooks/useFetch";

const Context = createContext();

function ContextProvider(props) {
    // let fetchObj = useFetch("https://opentdb.com/api.php?amount=5")
  const [fetchObj, setFetchObj] = useState(useFetch("https://opentdb.com/api.php?amount=5"))


    function apiCall(amount = "amount=5", category = "") {
      setFetchObj(useFetch(`https://opentdb.com/api.php?${amount}&${category}`))
    }

    console.log(fetchObj)
  return (
    <Context.Provider value={{fetchObj, apiCall}}> 
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj};
