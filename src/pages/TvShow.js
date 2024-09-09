import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Component/MovieCards";

function TvShow() {
  const movies = useSelector((state) => state.movies?.tvshowMovies);
  return (
    <div className="p-10 bg-slate-900 overflow-y-auto min-h-screen">
      <div className="w-[80%] grid grid-cols-4 gap-2 m-auto my-20 ">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default TvShow;
