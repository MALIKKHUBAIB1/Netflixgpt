import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/Store/MovieSlice";
import { useEffect } from "react";
const usePlayingNowMovies = (url) => {
  const dispatch = useDispatch();
  async function getPlayingNow(url) {
    const response = await fetch(url, API_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
    console.log(data.results);
  }
  useEffect(() => {
    getPlayingNow(url);
  }, []);
};
export default usePlayingNowMovies;
