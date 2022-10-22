import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerThree",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
};

export const playerThreeSlice = createSlice({
  name: "PlayerThree",
  initialState,
  reducers: {
    decreasePlayerThreeHealth: (state) => {
      state.lifeTotal -= 1;
    },
    increasePlayerThreeHealth: (state) => {
      state.lifeTotal += 1;
    },
    takePoisonDamagePlayerThree: (state) => {
      state.poisonTotal += 1;
    },
    takeCommanderDamagePlayerThree: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerThreeCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decreasePlayerThreeHealth,
  increasePlayerThreeHealth,
  takePoisonDamagePlayerThree,
  takeCommanderDamagePlayerThree,
} = playerThreeSlice.actions;

export default playerThreeSlice.reducer;
