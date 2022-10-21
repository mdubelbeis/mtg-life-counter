import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerOneHealth: 40,
  playerTwoHealth: 40,
  playerThreeHealth: 40,
  playerFourHealth: 40,
};

export const commanderSlice = createSlice({
  name: "commander",
  initialState,
  reducers: {
    loseHealth: (state: string, payload: {type: string, payload: string}, player: string) => {
      state.`player${player}Health` -= payload.payload;
    } 
  },
});

// Action creators are generated for each case reducer function
export const { ??? } = commanderSlice.actions;

export default commanderSlice.reducer;
