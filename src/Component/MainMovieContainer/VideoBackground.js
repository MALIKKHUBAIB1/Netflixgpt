import React from "react";
import { useSelector } from "react-redux";
import useFetchTrailer from "../../Hooks/useFetchTrailer";

function VideoBackground({ movieId }) {
  const id = useSelector((state) => state?.movies?.getTrailerId);
  useFetchTrailer(movieId);
  return (
    <div className="w-screen absolute">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${id}?&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;