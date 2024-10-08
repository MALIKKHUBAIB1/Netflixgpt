import React, { useRef } from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

function MainContainer() {
  const moviesData = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!moviesData) return "loading";

  const { original_title, overview, id } = moviesData[1];

  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </>
  );
}

export default MainContainer;
