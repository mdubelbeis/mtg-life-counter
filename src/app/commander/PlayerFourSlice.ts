import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
};

export const playerFourSlice = createSlice({
  name: "playerFour",
  initialState,
  reducers: {
    decreaseHealth: (state) => {
      state.lifeTotal -= 1;
    },
    increaseHealth: (state) => {
      state.lifeTotal += 1;
    },
    takePoisonDamage: (state) => {
      state.poisonTotal += 1;
    },
    takeCommanderDamage: (state) => {
      state.commanderDamage += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decreaseHealth,
  increaseHealth,
  takePoisonDamage,
  takeCommanderDamage,
} = playerFourSlice.actions;

export default playerFourSlice.reducer;
