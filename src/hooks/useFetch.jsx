import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffle";

export default function useFetch(url) {
  const [responseArray, setResponseArray] = useState([]);
  const [error, setError] = useState()

  function changeResponseArray(questions) {
    setResponseArray(questions);
  }

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(url);
      const data = await res.json();

      try {
        if (data.response_code === 0) {
          changeResponseArray(data);
        }
      } catch (e) {
        console.error(e);
        setError(e)
      }
    }

    doFetch();
  }, []);

  return {responseArray, error};
}
