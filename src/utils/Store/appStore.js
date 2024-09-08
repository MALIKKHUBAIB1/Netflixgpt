import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MovieSlice from "./MovieSlice";
import GptSearchSlice from "./GptSearchSlice";
import lanReducers from "./languageconfiguration";
import ModaId from "./ModalSlice";
import watchListReducer from "./watchList";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: MovieSlice,
    gpt: GptSearchSlice,
    lang: lanReducers,
    modal: ModaId,
    watch: watchListReducer,
  },
});
export default appStore;
