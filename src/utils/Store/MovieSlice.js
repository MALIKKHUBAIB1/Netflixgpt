import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    getTrailerId: null,
    topRatedMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    handleGetTrailerId: (state, action) => {
      state.getTrailerId = action.payload;
    },
    handlePopularMovies: (state, actions) => {
      state.popularMovies = actions.payload;
    },
    handleTopRatedMovies: (state, actions) => {
      state.topRatedMovies = actions.payload;
    },
    handleUpcomingMovies: (state, actions) => {
      state.upcomingMovies = actions.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  handleGetTrailerId,
  handlePopularMovies,
  handleTopRatedMovies,
  handleUpcomingMovies
} = movieSlice.actions;
export default movieSlice.reducer;
