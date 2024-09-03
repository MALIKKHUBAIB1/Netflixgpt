import React from "react";
import Header from "./Header";
import usePlayingNowMovies from "../Hooks/useNowPlaying";
import MainContainer from "./MainMovieContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import ErrorPage from "../pages/ErrorPage";

function Browse() {
  const { error, loading } = usePlayingNowMovies(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );
  if (error) {
    return (
      <ErrorPage
        message={error?.message || "something went Wrong"}
        statusCode={error.status}
      />
    );
  }
  if (loading) return "loading";
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
}

export default Browse;
