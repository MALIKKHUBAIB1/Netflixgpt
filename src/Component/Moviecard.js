import React from "react";
import { IMAGE_URL } from "../utils/constant";

function Moviecard({ imageId }) {
  return (
    <div className="w-52 pr-4"> 
      <img src={IMAGE_URL + imageId} alt="mvoieCard" className="rounded-md" />
    </div>
  );
}

export default Moviecard;
