import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUNDURL } from "../utils/constant";

function GptSearch() {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BACKGROUNDURL} alt="background images" />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
}

export default GptSearch;
