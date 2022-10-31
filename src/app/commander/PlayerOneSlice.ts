import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerOne",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  bgColor: "#3B82F6",
  textColor: "",
};

export const playerOneSlice = createSlice({
  name: "PlayerOne",
  initialState,
  reducers: {
    decrementPlayerOneHealth: (state) => {
      state.lifeTotal -= 1;
    },
    incrementPlayerOneHealth: (state) => {
      state.lifeTotal += 1;
    },
    decrementPoisonDamagePlayerOne: (state) => {
      state.poisonTotal -= 1;
    },
    decrementCommanderDamagePlayerOne: (state) => {
      state.commanderDamage -= 1;
    },
    incrementPoisonDamagePlayerOne: (state) => {
      state.poisonTotal += 1;
    },
    incrementCommanderDamagePlayerOne: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerOneCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
    updatePlayerOneBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
    updatePlayerOneTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decrementPlayerOneHealth,
  incrementPlayerOneHealth,
  decrementCommanderDamagePlayerOne,
  decrementPoisonDamagePlayerOne,
  incrementPoisonDamagePlayerOne,
  incrementCommanderDamagePlayerOne,
  updatePlayerOneCommander,
  updatePlayerOneBgColor,
  updatePlayerOneTextColor,
} = playerOneSlice.actions;

export default playerOneSlice.reducer;
