import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[20%] text-start px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="py-6 w-1/3 text-lg text-justify">{overview}</p>
      <div>
        <button className="bg-white text-black w-36 p-4  rounded-md opacity-90 hover:bg-opacity-65">
          <i className="fas fa-play mx-2 "></i>
          Play
        </button>
        <button className="bg-gray-400 text-black w-44 p-4 rounded-md mx-3 opacity-90 hover:opacity-65">
          <i className="fas fa-info-circle mx-2"></i>
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
