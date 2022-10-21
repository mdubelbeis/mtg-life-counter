import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerOneHealth: 20,
  playerTwoHealth: 20,
};

export const standardSlice = createSlice({
  name: "standard",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {??? } = standardSlice.actions;

export default standardSlice.reducer;
