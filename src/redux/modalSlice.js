import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    content: null,
    isSubmitted: false,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal: (state, _) => {
      state.isOpen = false;
      state.content = null;
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
  },
});

export const { openModal, closeModal, setIsSubmitted } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
