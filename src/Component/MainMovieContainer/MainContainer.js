import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const moviesData = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!moviesData) return "loading";
  else console.log(moviesData[0]);
  const { original_title, overview,id } = moviesData[0];

  return (
    <div className="">
      <VideoBackground movieId = {id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
}

export default MainContainer;