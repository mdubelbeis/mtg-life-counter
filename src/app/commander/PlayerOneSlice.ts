import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerOne",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  bgColor: "bg-blue-500",
};

export const playerOneSlice = createSlice({
  name: "PlayerOne",
  initialState,
  reducers: {
    decreasePlayerOneHealth: (state) => {
      state.lifeTotal -= 1;
    },
    increasePlayerOneHealth: (state) => {
      state.lifeTotal += 1;
    },
    takePoisonDamagePlayerOne: (state) => {
      state.poisonTotal += 1;
    },
    takeCommanderDamagePlayerOne: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerOneCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
    updatePlayerOneBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decreasePlayerOneHealth,
  increasePlayerOneHealth,
  takePoisonDamagePlayerOne,
  takeCommanderDamagePlayerOne,
  updatePlayerOneCommander,
  updatePlayerOneBgColor,
} = playerOneSlice.actions;

export default playerOneSlice.reducer;
