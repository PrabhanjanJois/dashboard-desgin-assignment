import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import refreshSlice from "./refreshSlice";
import starredPagesReducer from "./starredPagesSlice";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    refresh: refreshSlice,
    starredPages: starredPagesReducer,
  },
});
