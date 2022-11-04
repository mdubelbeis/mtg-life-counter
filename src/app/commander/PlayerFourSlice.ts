import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: "PlayerFour",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  boardColor: "#B8F2E6",
  textColor: "#FAF3DD",
};

export const playerFourSlice = createSlice({
  name: "PlayerFour",
  initialState,
  reducers: {
    decrementPlayerFourHealth: (state) => {
      state.lifeTotal -= 1;
    },
    incrementPlayerFourHealth: (state) => {
      state.lifeTotal += 1;
    },
    decrementPoisonDamagePlayerFour: (state) => {
      state.poisonTotal -= 1;
    },
    decrementCommanderDamagePlayerFour: (state) => {
      state.commanderDamage -= 1;
    },
    incrementPoisonDamagePlayerFour: (state) => {
      state.poisonTotal += 1;
    },
    incrementCommanderDamagePlayerFour: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerFourCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
    updatePlayerFourBoardColor: (state, action: PayloadAction<string>) => {
      state.boardColor = action.payload;
    },
    updatePlayerFourTextColor: (state, action: PayloadAction<string>) => {
      state.textColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decrementPlayerFourHealth,
  incrementPlayerFourHealth,
  decrementCommanderDamagePlayerFour,
  decrementPoisonDamagePlayerFour,
  incrementPoisonDamagePlayerFour,
  incrementCommanderDamagePlayerFour,
  updatePlayerFourCommander,
  updatePlayerFourBoardColor,
  updatePlayerFourTextColor,
} = playerFourSlice.actions;

export default playerFourSlice.reducer;
