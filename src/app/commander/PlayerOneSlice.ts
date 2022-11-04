import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerOne",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  boardColor: "#FF6F61",
  textColor: "#E3D3E4",
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
    updatePlayerOneTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
    resetPlayerOne: (state) => {
      state.lifeTotal = 40;
      state.poisonTotal = 0;
      state.commanderDamage = 0;
      state.commander = "";
      state.boardColor = "#FF6F61";
      state.textColor = "#E3D3E4";
    },
    setPlayerOneLifeTotal: (state, action: PayloadAction<number>) => {
      state.lifeTotal = Number(action.payload);
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
  updatePlayerOneTextColor,
  resetPlayerOne,
  setPlayerOneLifeTotal,
} = playerOneSlice.actions;

export default playerOneSlice.reducer;
