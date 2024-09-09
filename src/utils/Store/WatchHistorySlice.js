import { createSlice } from "@reduxjs/toolkit";

const watchHistorySlice = createSlice({
  name: "history",
  initialState: {
    watchHistory: [],
  },
  reducers: {
    addWatchHistory: (state, action) => {
      state.watchHistory.push(action.payload);
    },
  },
});
export const { addWatchHistory } = watchHistorySlice.actions;
export default watchHistorySlice.reducer;
