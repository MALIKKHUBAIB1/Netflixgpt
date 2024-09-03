import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MovieSlice from "./MovieSlice";
const appStore = configureStore({
  reducer: { user: userReducer, movies: MovieSlice },
});
export default appStore;
