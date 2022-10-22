import { configureStore } from "@reduxjs/toolkit";
import PlayerFourReducer from "./commander/PlayerFourSlice";
import PlayerThreeReducer from "./commander/PlayerThreeSlice";
import PlayerTwoReducer from "./commander/PlayerTwoSlice";
import PlayerOneReducer from "./commander/PlayerOneSlice";

export const store = configureStore({
  reducer: {
    PlayerFour: PlayerFourReducer,
    PlayerThree: PlayerThreeReducer,
    PlayerTwo: PlayerTwoReducer,
    PlayerOne: PlayerOneReducer,
  },
});
