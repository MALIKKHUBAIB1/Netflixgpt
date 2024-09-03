import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleGetTrailerId } from "../utils/Store/MovieSlice";
import { API_OPTIONS } from "../utils/constant";
function useFetchTrailer(movieId) {
  const dispatch = useDispatch();
  async function getMovieData(movieId) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    const filterData = data.results.filter(
      (video) => video?.type === "Trailer"
    );
    const trailerVideo = filterData.length ? filterData[0] : data.results[0];
    dispatch(handleGetTrailerId(trailerVideo.key));
  }

  useEffect(() => {
    getMovieData(movieId);
  }, []);
}

export default useFetchTrailer;
