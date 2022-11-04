import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerTwo",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  boardColor: "#34568B",
  textColor: "#00FFCD",
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
    updatePlayerTwoBoardColor: (state, action: PayloadAction<string>) => {
      state.boardColor = action.payload;
    },
    updatePlayerTwoTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
    resetPlayerTwo: (state) => {
      state.lifeTotal = 40;
      state.poisonTotal = 0;
      state.commanderDamage = 0;
      state.commander = "";
      state.boardColor = "#34568B";
      state.textColor = "#00FFCD";
    },
    setPlayerTwoLifeTotal: (state, action: PayloadAction<number>) => {
      state.lifeTotal = Number(action.payload);
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
  updatePlayerTwoBoardColor,
  updatePlayerTwoTextColor,
  resetPlayerTwo,
  setPlayerTwoLifeTotal,
} = playerTwoSlice.actions;

export default playerTwoSlice.reducer;
