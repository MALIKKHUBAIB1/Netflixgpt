import React from "react";
import Header from "./Header";
import usePlayingNowMovies from "../Hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import ErrorPage from "../pages/ErrorPage";
import useFetchpopularMovie from "../Hooks/useFetchPopularMovie";
import useFetchTopRated from "../Hooks/useFetchTopReated";
import useFetchUpcoming from "../Hooks/useUpcomingMovie";

function Browse() {
  const { error, loading } = usePlayingNowMovies(
    "https://api.themoviedb.org/3/movie/now_playing?&page=1"
  );
  useFetchpopularMovie();
  useFetchTopRated();
  useFetchUpcoming();
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
      <>
        <MainContainer />
        <SecondaryContainer />
      </>
    </div>
  );
}

export default Browse;
