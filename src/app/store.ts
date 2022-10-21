import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    playerOne: playerOneReducer;
    playerTwo: playerTwoReducer;
    playerThree: playerThreeReducer;
    playerFour: playerFourReducer;
  },
});
