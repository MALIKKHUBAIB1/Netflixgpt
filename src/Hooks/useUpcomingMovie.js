// https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleUpcomingMovies } from "../utils/Store/MovieSlice";
import { API_OPTIONS } from "../utils/constant";
function useFetchUpcoming() {
  const dispatch = useDispatch();
  async function getMovieData() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(handleUpcomingMovies(data.results));
  }

  useEffect(() => {
    getMovieData();
  }, []);
}

export default useFetchUpcoming;
