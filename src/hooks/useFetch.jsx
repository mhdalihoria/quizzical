import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffle";

export default function useFetch(url) {
  const [response, setResponse] = useState();
  const [error, setError] = useState()

  function changeResponse(questions) {
    setResponse(questions);
  }

  useEffect(() => {
    async function doFetch() {
      const res = await fetch(url);
      const data = await res.json();

      try {
        if (data.response_code === 0) {
          changeResponse(data);
        }
      } catch (e) {
        console.error(e);
        setError(e)
      }
    }

    doFetch();
  }, []);

  return {response, error};
}
