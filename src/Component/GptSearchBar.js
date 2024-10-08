import React, { useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai.js";
function GptSearchBar() {
  const langconfuguration = useSelector((state) => state.lang.lang);
  const searchText = useRef(null);

  async function searchHandler() {
    //make an api call to get the movie results

    const serachResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    console.log(serachResult.choices);
    searchText.current.value = "";
  }

  function clearSearchHandler() {
    if (searchText.current) {
      searchText.current.value = "";
    }
  }

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-full max-w-4xl bg-black grid grid-cols-12 gap-2 p-4 rounded-lg">
        <div className="relative col-span-12 sm:col-span-9">
          <input
            type="text"
            ref={searchText}
            className="p-4 pr-12 w-full rounded-lg  text-black border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder={lang[langconfuguration].gptSeachPlaceHolder}
          />
          <i
            className="fas fa-times absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-200"
            onClick={clearSearchHandler}
          ></i>
        </div>
        <button
          className="bg-red-600 rounded-lg text-white p-4 w-full sm:w-auto col-span-12 sm:col-span-3"
          type="button"
          onClick={searchHandler}
        >
          {lang[langconfuguration]?.search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
