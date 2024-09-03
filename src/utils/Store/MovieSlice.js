import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    getTrailerId: null,
  },
  reducers: {
    addNowPlayingMovies: (state, actions) => {
      state.nowPlayingMovies = actions.payload;
    },
    handleGetTrailerId: (state, action) => {
      state.getTrailerId = action.payload;
    },
  },
});
export const { addNowPlayingMovies, handleGetTrailerId } = movieSlice.actions;
export default movieSlice.reducer;
