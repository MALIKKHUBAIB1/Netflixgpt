import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toogleGptSeachView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});
export const { toogleGptSeachView } = gptSlice.actions;
export default gptSlice.reducer;
