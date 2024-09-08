import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
function SecondaryContainer() {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  const popularMovies = useSelector((state) => state.movies?.popularMovies);
  const topRatedMovie = useSelector((state) => state.movies?.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movies?.upcomingMovies);
  
  return (
    <div className=" bg-black pl-12">
      <div className="-mt-52  relative z-20">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Top Rated" movies={topRatedMovie} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />
      </div>
    </div>
  );
}
// Movie List - Popular
// Movie List - Tranding
// Movie Card
// Movie List - now Playing
// Movie List - Horror
// Movie List - Comedy

export default SecondaryContainer;
