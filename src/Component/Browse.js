import React from "react";
import Header from "./Header";
import usePlayingNowMovies from "../Hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import ErrorPage from "../pages/ErrorPage";
import useFetchpopularMovie from "../Hooks/useFetchPopularMovie";
import useFetchTopRated from "../Hooks/useFetchTopReated";
import useFetchUpcoming from "../Hooks/useUpcomingMovie";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useFetchTrailer from "../Hooks/useFetchModalTrailer";
import Modal from "./Modal";
import useFetchTvShow from "../Hooks/useFetchTvShow";

function Browse() {
  const { error, loading } = usePlayingNowMovies(
    "https://api.themoviedb.org/3/movie/now_playing?&page=1"
  );
  const search = useSelector((state) => state.gpt.showGptSearch);
  const id = useSelector((state) => state?.modal?.id);
  const isOpen = useSelector((state) => state?.modal?.showModal);
  const { error: errorPopular, loading: loadingPopular } =
    useFetchpopularMovie();
  const { error: errorTopRated, loading: loadingTopRated } = useFetchTopRated();
  const { error: errorUpcoming, loading: loadingUpcoming } = useFetchUpcoming();
  const { error: errorTvShow, loadingTvShow } = useFetchTvShow();
  useFetchTrailer(id);
  const combinedError =
    error || errorPopular || errorTopRated || errorUpcoming || errorTvShow;

  if (combinedError) {
    return (
      <ErrorPage
        message={combinedError?.message || "Something went wrong"}
        statusCode={combinedError?.status || 500}
      />
    );
  }

  // Handle loading states from multiple hooks
  if (
    loading ||
    loadingPopular ||
    loadingTopRated ||
    loadingUpcoming ||
    loadingTvShow
  ) {
    return "loading...";
  }

  return (
    <div>
      <Header />
      {search ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {isOpen && <Modal />}
    </div>
  );
}

export default Browse;
