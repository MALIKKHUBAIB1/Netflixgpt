import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MovieSlice from "./MovieSlice";
import GptSearchSlice from "./GptSearchSlice";
import lanReducers from "./languageconfiguration";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: MovieSlice,
    gpt: GptSearchSlice,
    lang: lanReducers,
  },
});
export default appStore;
