import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const COLORS = [
  "bg-blue-500",
  "bg-red-500",
  "bg-green-500",
  "bg-black",
  "bg-yellow-100",
  "bg-slate-100",
];

const initialState = {
  name: "PlayerFour",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  bgColor: "bg-blue-500",
};

export const playerFourSlice = createSlice({
  name: "PlayerFour",
  initialState,
  reducers: {
    decreasePlayerFourHealth: (state) => {
      state.lifeTotal -= 1;
    },
    increasePlayerFourHealth: (state) => {
      state.lifeTotal += 1;
    },
    takePoisonDamagePlayerFour: (state) => {
      state.poisonTotal += 1;
    },
    takeCommanderDamagePlayerFour: (state) => {
      state.commanderDamage += 1;
    },
    updatePlayerFourCommander: (state, action: PayloadAction<string>) => {
      state.commander = action.payload;
    },
    updatePlayerFourBgColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  decreasePlayerFourHealth,
  increasePlayerFourHealth,
  takePoisonDamagePlayerFour,
  takeCommanderDamagePlayerFour,
  updatePlayerFourCommander,
  updatePlayerFourBgColor,
} = playerFourSlice.actions;

export default playerFourSlice.reducer;
