import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
  keyId: null, // Stores the YouTube video ID
  id: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toogleModal: (state, action) => {
      state.showModal = action.payload.showModal;
      // state.keyId = action.payload.keyId;
    },
    getTrailerId: (state, action) => {
      state.id = action.payload; // Assuming this is where you fetch the trailer ID
    },
    getTrailerKey: (state, action) => {
      state.keyId = action.payload;
    },
  },
});

export const { toogleModal, getTrailerId, getTrailerKey } = modalSlice.actions;
export default modalSlice.reducer;
