import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

import { modalReducer } from "./modalSlice";
import { fullscreenReducer } from "./fullScreenSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalReducer,
    fullscreen: fullscreenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
