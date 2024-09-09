import React from "react";
import MovieCard from "../Component/MovieCards.js";
import { useSelector } from "react-redux";
import VideoPlayer from "../Component/VideoPlayer.js";
import useFetchTrailer from "../Hooks/useFetchModalTrailer.js";
function PopularMovie() {
  const movies = useSelector((state) => state.movies?.popularMovies);
  const isOpen = useSelector((state) => state.modal?.showModal);
  const id = useSelector((state) => state?.modal?.id);
  useFetchTrailer(id);
  return (
    <>
      <div className="p-10 bg-slate-900 overflow-y-auto min-h-screen">
        <div className="w-[80%] grid grid-cols-4 gap-2 m-auto my-20 ">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        {isOpen && <VideoPlayer />}
      </div>
    </>
  );
}

export default PopularMovie;
