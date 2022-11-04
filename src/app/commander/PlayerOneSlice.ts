import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerOne",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  boardColor: "#FF6F61",
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
    updatePlayerOneBoardColor: (state, action: PayloadAction<string>) => {
      state.boardColor = action.payload;
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
  updatePlayerOneBoardColor,
} = playerOneSlice.actions;

export default playerOneSlice.reducer;
