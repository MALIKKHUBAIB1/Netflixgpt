import React from "react";
import { IMAGE_URL } from "../utils/constant";
import {useDispatch} from "react-redux";
import { addWatchList } from "../utils/Store/watchList";
function MovieCard({ movie }) {
  const dispatch = useDispatch();
  function handleWatchList(movie) {
    dispatch(addWatchList(movie));
  }
  return (
    <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800">
      <img
        className="rounded-t-lg w-full"
        src={
          !movie.backdrop_path
            ? "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?cs=srgb&dl=pexels-pixabay-163236.jpg&fm=jpg"
            : IMAGE_URL + movie.backdrop_path
        }
        alt={movie.title || "Movie image"}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {movie.title ||
            movie.name ||
            "Noteworthy technology acquisitions 2021"}
        </h5>
        <p className="mb-3 font-normal text-gray-400 text-justify">
          {movie.overview.slice(0, 200) ||
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
          ....
        </p>
        <div
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer"
          onClick={() => handleWatchList(movie)}
        >
          Add to Watchlist
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
