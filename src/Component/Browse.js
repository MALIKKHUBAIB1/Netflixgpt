import React from "react";
import Header from "./Header";
import usePlayingNowMovies from "../Hooks/useNowPlaying";

function Browse() {
  usePlayingNowMovies(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );
  return (
    <div>
      <Header />
    </div>
  );
}

export default Browse;
