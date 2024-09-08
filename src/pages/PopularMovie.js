import React from "react";
import MovieCard from "../Component/MovieCard";
import { useSelector } from "react-redux";

function PopularMovie() {
  const movies = useSelector((state) => state.movies?.popularMovies);

  return (
    <div className="p-10 bg-slate-900 overflow-y-auto min-h-screen">
      <div className="w-[80%] grid grid-cols-4 gap-2 m-auto my-20 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovie;
