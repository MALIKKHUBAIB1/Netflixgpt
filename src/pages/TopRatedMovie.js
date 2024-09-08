import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Component/MovieCard";

function TopRatedMovie() {
  const movies = useSelector((state) => state?.movies?.topRatedMovies);

  return (
    <div className="p-10 bg-slate-900 overflow-y-auto min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
}

export default TopRatedMovie;
