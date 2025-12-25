import { createSlice } from "@reduxjs/toolkit";

const fullscreenSlice = createSlice({
  name: "fullscreen",
  initialState: {
    isFullscreen: {},
  },
  reducers: {
    setFullscreen: (state, action) => {
      const { currentPage } = action.payload;

      state.isFullscreen[currentPage] = !state.isFullscreen[currentPage];
    },
  },
});

export const { setFullscreen } = fullscreenSlice.actions;
export const fullscreenReducer = fullscreenSlice.reducer;
