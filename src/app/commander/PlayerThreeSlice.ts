import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerThree",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  boardColor: "#321325",
  textColor: "#FCDC4D",
};

export const playerThreeSlice = createSlice({
  name: "PlayerThree",
  initialState,
  reducers: {
    decrementPlayerThreeHealth: (state) => {
      state.lifeTotal -= 1;
    },
    incrementPlayerThreeHealth: (state) => {
      state.lifeTotal += 1;
    },
    decrementPoisonDamagePlayerThree: (state) => {
      state.poisonTotal -= 1;
    },
    decrementCommanderDamagePlayerThree: (state) => {
      state.commanderDamage -= 1;
    },
    incrementPoisonDamagePlayerThree: (state) => {
      state.poisonTotal += 1;
    },
    incrementCommanderDamagePlayerThree: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerThreeCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
    updatePlayerThreeBoardColor: (state, action: PayloadAction<string>) => {
      state.boardColor = action.payload;
    },
    updatePlayerThreeTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decrementPlayerThreeHealth,
  incrementPlayerThreeHealth,
  decrementCommanderDamagePlayerThree,
  decrementPoisonDamagePlayerThree,
  incrementPoisonDamagePlayerThree,
  incrementCommanderDamagePlayerThree,
  updatePlayerThreeCommander,
  updatePlayerThreeBoardColor,
  updatePlayerThreeTextColor,
} = playerThreeSlice.actions;

export default playerThreeSlice.reducer;
