import { createSlice } from "@reduxjs/toolkit";

const fullscreenSlice = createSlice({
  name: "fullscreen",
  initialState: { isFullscreen: false },
  reducers: {
    setFullscreen: (state, _) => {
      state.isFullscreen = !state.isFullscreen;
    },
  },
});

export const { setFullscreen } = fullscreenSlice.actions;
export const fullscreenReducer = fullscreenSlice.reducer;
