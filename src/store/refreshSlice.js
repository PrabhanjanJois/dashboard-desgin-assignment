// store/refreshSlice.js
import { createSlice } from "@reduxjs/toolkit";

const refreshSlice = createSlice({
  name: "refresh",
  initialState: { key: 0 }, // trigger value
  reducers: {
    triggerRefresh: (state) => {
      state.key = Date.now(); // unique value each time
    },
  },
});

export const { triggerRefresh } = refreshSlice.actions;
export default refreshSlice.reducer;
