import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handlePopularMovies } from "../utils/Store/MovieSlice";
import { API_OPTIONS } from "../utils/constant";
function useFetchpopularMovie() {
  const dispatch = useDispatch();
  async function getMovieData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(handlePopularMovies(data.results));
  }

  useEffect(() => {
    getMovieData();
  }, []);
}

export default useFetchpopularMovie;
