import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleTopRatedMovies } from "../utils/Store/MovieSlice";
import { API_OPTIONS } from "../utils/constant";
function useFetchTopRated() {
  const dispatch = useDispatch();
  async function getMovieData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(handleTopRatedMovies(data.results));
  }

  useEffect(() => {
    getMovieData();
  }, []);
}

export default useFetchTopRated;
