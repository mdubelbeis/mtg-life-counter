import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerThree",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  bgColor: "bg-blue-500",
  textColor: "",
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
    gainPoisonDamagePlayerThree: (state) => {
      state.poisonTotal -= 1;
    },
    gainCommanderDamagePlayerThree: (state) => {
      state.commanderDamage -= 1;
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
    updatePlayerThreeBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
    updatePlayerThreeTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decreasePlayerThreeHealth,
  increasePlayerThreeHealth,
  gainCommanderDamagePlayerThree,
  gainPoisonDamagePlayerThree,
  takePoisonDamagePlayerThree,
  takeCommanderDamagePlayerThree,
  updatePlayerThreeCommander,
  updatePlayerThreeBgColor,
  updatePlayerThreeTextColor,
} = playerThreeSlice.actions;

export default playerThreeSlice.reducer;
