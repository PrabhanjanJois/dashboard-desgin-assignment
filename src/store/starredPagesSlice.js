// store/slices/starredPagesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const starredPagesSlice = createSlice({
  name: "starredPages",
  initialState,
  reducers: {
    toggleStar: (state, action) => {
      const page = action.payload;
      state[page] = !state[page];
    },
    setStarredPages: (state, action) => {
      return action.payload; // overwrite with stored data (if you still want persistence)
    },
  },
});

export const { toggleStar, setStarredPages } = starredPagesSlice.actions;
export default starredPagesSlice.reducer;
