import { useEffect, useState } from "react";
import { shuffleArray } from "../utils/shuffle";

export default function useFetch(url) {
  const [response, setResponse] = useState();
  const [error, setError] = useState(); 

  useEffect(() => {
    async function doFetch() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error;
        }

        const data = await res.json();

        if (data.response_code === 0) {
          setResponse(data);
        }
      } catch (e) {
        console.error(e);
        setError(e);
      }
    }

    doFetch();
  }, []);

  return { response, error };
}
