import React from "react";
import { useDispatch } from "react-redux";
import { removeWatchList } from "../utils/Store/watchList";
import { IMAGE_URL } from "../utils/constant";

function WatchListItem({ movie }) {
  const disPatch = useDispatch();
  function removeHandler(id) {
    disPatch(removeWatchList(id));
  }
  return (
    <div className="w-[80%] mx-auto my-16 bg-white shadow-lg rounded-lg overflow-hidden flex justify-start items-stretch transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-1/3 object-cover"
        src={
          IMAGE_URL + movie.backdrop_path ||
          "https://images.unsplash.com/photo-1444487233259-dae9d907a740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9hdHxlbnwwfHwwfHx8MA%3D%3D"
        }
        alt="Boat"
      />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {movie.name || movie.title || "this is a special Movie"}
        </h1>
        <p className="text-gray-600 mb-4 leading-relaxed text-justify">
          {movie?.overview ||
            "Explore the beauty of the sea with this majestic boat. Glidethrough  the waves and experience serenity like never before. A journey worth  taking."}
        </p>
        <div className="flex items-center text-gray-700 mb-4">
          <p className="text-xl font-semibold">
            {movie?.vote_average || "4.5"}
          </p>
          <p className="mx-3 text-sm text-gray-500">|</p>
          <p className="text-lg">{movie.vote_count || "8,349"} Reviews </p>
        </div>
        <button
          className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300 w-48"
          onClick={() => removeHandler(movie.id)}
        >
          Remove Watchlist
        </button>
      </div>
    </div>
  );
}

export default WatchListItem;
