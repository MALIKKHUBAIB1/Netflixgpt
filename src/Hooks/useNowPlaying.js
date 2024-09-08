import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Store/MovieSlice";
import { useEffect, useState } from "react";

const usePlayingNowMovies = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getPlayingNow() {
      try {
        const response = await fetch(url, API_OPTIONS);

        // Check if the response status is OK (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
      } catch (error) {
        setError(error);
        console.error("Error fetching playing now movies:", error);
      } finally {
        setLoading(false);
      }
    }

    getPlayingNow();

    // Optional cleanup logic can go here if necessary
    return () => {
      // Cleanup logic if needed
    };
  }, [url, dispatch]); // Added dispatch to dependency array to avoid stale closures

  return { error, loading };
};

export default usePlayingNowMovies;
