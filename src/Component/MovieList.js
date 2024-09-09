import React from "react";
import Moviecard from "./Moviecard";

function MovieList({ title, movies }) {
  return (
    <div className="p-6 text-start">
      <h1 className="font-bold text-white text-3xl mb-6">{title} </h1>
      <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory space-x-4">
        <div className="flex">
          {movies &&
            movies?.map((item) => {
              return (
                <Moviecard
                  imageId={item.poster_path}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
