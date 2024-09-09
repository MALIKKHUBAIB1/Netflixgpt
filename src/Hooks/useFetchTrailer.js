import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { handleGetTrailerId } from "../utils/Store/MovieSlice";
import { API_OPTIONS } from "../utils/constant";

function useFetchTrailer(movieId) {
  const dispatch = useDispatch();

  const getMovieData = useCallback(
    async (movieId) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await response.json();
        const filterData = data.results.filter(
          (video) => video?.type === "Trailer"
        );
        const trailerVideo = filterData.length
          ? filterData[0]
          : data.results[0];

        if (trailerVideo) {
          dispatch(handleGetTrailerId(trailerVideo.key));
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (movieId) {
      getMovieData(movieId);
    }
  }, [getMovieData, movieId]);

  return null;
}

export default useFetchTrailer;
