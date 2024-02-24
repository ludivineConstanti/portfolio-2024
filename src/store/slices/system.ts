import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name: "system",
  initialState: {
    width: 0,
    height: 0,
  },
  reducers: {
    setWidthAndHeight: (state, action) => {
      state.width = action.payload.width;
      state.height = action.payload.height;
    },
  },
});

export const { setWidthAndHeight } = systemSlice.actions;

export default systemSlice.reducer;
