import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const COLORS = [
  "bg-blue-500",
  "bg-red-500",
  "bg-green-500",
  "bg-black",
  "bg-yellow-200",
  "bg-slate-100",
];

const initialState = {
  name: "PlayerThree",
  lifeTotal: 40,
  poisonTotal: 0,
  commanderDamage: 0,
  commander: "",
  bgColor: "bg-blue-500",
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
  },
});

// Action creators are generated for each case reducer function
export const {
  decreasePlayerThreeHealth,
  increasePlayerThreeHealth,
  takePoisonDamagePlayerThree,
  takeCommanderDamagePlayerThree,
  updatePlayerThreeCommander,
  updatePlayerThreeBgColor,
} = playerThreeSlice.actions;

export default playerThreeSlice.reducer;
