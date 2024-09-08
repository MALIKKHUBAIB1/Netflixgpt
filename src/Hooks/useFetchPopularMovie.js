import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handlePopularMovies } from "../utils/Store/MovieSlice";
import { API_OPTIONS } from "../utils/constant";

function useFetchpopularMovie() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovieData() {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(handlePopularMovies(data.results));
      } catch (error) {
        setError(error);
        console.error("Error fetching popular movies:", error);
      } finally {
        setLoading(false);
      }
    }

    getMovieData();
  }, [dispatch]);

  return { loading, error };
}

export default useFetchpopularMovie;
