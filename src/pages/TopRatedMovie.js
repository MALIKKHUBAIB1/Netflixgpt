import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../Component/MovieCards.js";
import useFetchTrailer from "../Hooks/useFetchModalTrailer";
import VideoPlayer from "../Component/VideoPlayer.js";
function TopRatedMovie() {
  const movies = useSelector((state) => state?.movies?.topRatedMovies);
  const isOpen = useSelector((state) => state.modal?.showModal);
  const id = useSelector((state) => state?.modal?.id);
  useFetchTrailer(id);
  return (
    <div className="p-10 bg-slate-900 overflow-y-auto min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20">
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
      {isOpen && <VideoPlayer />}
    </div>
  );
}

export default TopRatedMovie;
