import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { getTrailerKey } from "../utils/Store/ModalSlice";

function useFetchTrailer(movieId) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMovieData(movieId) {
      if (!movieId) return; // Exit if no movieId

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await response.json();
        const filterData = data.results.filter(
          (video) => video?.type === "Trailer"
        );
        console.log(filterData);
        const trailerVideo = filterData.length
          ? filterData[0]
          : data.results[0];

        // Dispatch only if we have a trailer key to prevent unnecessary state updates
        if (trailerVideo?.key) {
          dispatch(getTrailerKey(trailerVideo.key));
        }
      } catch (error) {
        console.error("Error fetching trailer data:", error);
      }
    }

    getMovieData(movieId); // Always call the function inside useEffect, but it will exit early if no movieId
  }, [movieId, dispatch]);
}

export default useFetchTrailer;
