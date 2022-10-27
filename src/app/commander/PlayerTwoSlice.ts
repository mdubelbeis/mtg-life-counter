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
    decrementPlayerTwoHealth: (state) => {
      state.lifeTotal -= 1;
    },
    incrementPlayerTwoHealth: (state) => {
      state.lifeTotal += 1;
    },
    decrementPoisonDamagePlayerTwo: (state) => {
      state.poisonTotal -= 1;
    },
    decrementCommanderDamagePlayerTwo: (state) => {
      state.commanderDamage -= 1;
    },
    incrementPoisonDamagePlayerTwo: (state) => {
      state.poisonTotal += 1;
    },
    incrementCommanderDamagePlayerTwo: (state) => {
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
  decrementPlayerTwoHealth,
  incrementPlayerTwoHealth,
  decrementCommanderDamagePlayerTwo,
  decrementPoisonDamagePlayerTwo,
  incrementPoisonDamagePlayerTwo,
  incrementCommanderDamagePlayerTwo,
  updatePlayerTwoCommander,
  updatePlayerTwoBgColor,
  updatePlayerTwoTextColor,
} = playerTwoSlice.actions;

export default playerTwoSlice.reducer;
