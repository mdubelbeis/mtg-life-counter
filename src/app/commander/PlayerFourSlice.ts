import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerFour",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
};

export const playerFourSlice = createSlice({
  name: "PlayerFour",
  initialState,
  reducers: {
    decreasePlayerFourHealth: (state) => {
      state.lifeTotal -= 1;
    },
    increasePlayerFourHealth: (state) => {
      state.lifeTotal += 1;
    },
    takePoisonDamagePlayerFour: (state) => {
      state.poisonTotal += 1;
    },
    takeCommanderDamagePlayerFour: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerFourCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decreasePlayerFourHealth,
  increasePlayerFourHealth,
  takePoisonDamagePlayerFour,
  takeCommanderDamagePlayerFour,
  updatePlayerFourCommander,
} = playerFourSlice.actions;

export default playerFourSlice.reducer;
