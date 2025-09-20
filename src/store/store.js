import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import refreshSlice from "./refreshSlice";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    refresh: refreshSlice,
  },
});
