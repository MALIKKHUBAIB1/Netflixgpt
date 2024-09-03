import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Store/MovieSlice";
import { useEffect, useState } from "react";
const usePlayingNowMovies = (url) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function getPlayingNow(url) {
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getPlayingNow(url);
  }, [url]);

  return { error, loading };
};
export default usePlayingNowMovies;
