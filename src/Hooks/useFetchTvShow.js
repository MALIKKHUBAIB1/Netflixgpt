import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { handletvShowMovie } from "../utils/Store/MovieSlice";
function useFetchTvShow() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const dispatch = useDispatch(true);
  const url = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
  async function getData(url) {
    try {
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok)
        throw new Error(response.messages || "something went wrong");
      const data = await response.json();
      dispatch(handletvShowMovie(data?.results));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData(url);
  }, []);
  return { error, loading };
}

export default useFetchTvShow;
