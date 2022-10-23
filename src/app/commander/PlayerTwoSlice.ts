import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerTwo",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  bgColor: "bg-blue-500",
  textColor: "",
};

export const playerTwoSlice = createSlice({
  name: "PlayerTwo",
  initialState,
  reducers: {
    decreasePlayerTwoHealth: (state) => {
      state.lifeTotal -= 1;
    },
    increasePlayerTwoHealth: (state) => {
      state.lifeTotal += 1;
    },
    gainPoisonDamagePlayerTwo: (state) => {
      state.poisonTotal -= 1;
    },
    gainCommanderDamagePlayerTwo: (state) => {
      state.commanderDamage -= 1;
    },
    takePoisonDamagePlayerTwo: (state) => {
      state.poisonTotal += 1;
    },
    takeCommanderDamagePlayerTwo: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerTwoCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
    updatePlayerTwoBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
    updatePlayerTwoTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decreasePlayerTwoHealth,
  increasePlayerTwoHealth,
  gainCommanderDamagePlayerTwo,
  gainPoisonDamagePlayerTwo,
  takePoisonDamagePlayerTwo,
  takeCommanderDamagePlayerTwo,
  updatePlayerTwoCommander,
  updatePlayerTwoBgColor,
  updatePlayerTwoTextColor,
} = playerTwoSlice.actions;

export default playerTwoSlice.reducer;
