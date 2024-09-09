import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchList: [],
  },
  reducers: {
    addWatchList: (state, action) => {
      const existingCartItem = state.watchList.find(
        (item) => item.id === action.payload.id
      );
      if (existingCartItem) {
        return; // if cart item is exist do nothing
      } else {
        state.watchList.push(action.payload); // if the item is not exist push the item to the array
      }
    },
    removeWatchList: (state, action) => {
      state.watchList = state.watchList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addWatchList, removeWatchList } = watchListSlice.actions;
export default watchListSlice.reducer; // Correct export
