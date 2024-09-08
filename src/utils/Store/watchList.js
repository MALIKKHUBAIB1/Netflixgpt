import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchList: [],
  },
  reducers: {
    addWatchList: (state, action) => {
      state.watchList.push(action.payload); // Correctly pushing the payload to the array
    },
    removeWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (item) => item.id !== action.payload
      ); // Correct reducer name
    },
  },
});

export const { addWatchList, removeWatchList } = watchListSlice.actions;
export default watchListSlice.reducer; // Correct export
