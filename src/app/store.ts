import { configureStore } from "@reduxjs/toolkit";
import PlayerFourReducer from "./commander/PlayerFour";
import PlayerThreeReducer from "./commander/PlayerThree";
import PlayerTwoReducer from "./commander/PlayerTwo";
import PlayerOneReducer from "./commander/PlayerOne";

export const store = configureStore({
  reducer: {
    PlayerFour: PlayerFourReducer,
    PlayerThree: PlayerThreeReducer,
    PlayerTwo: PlayerTwoReducer,
    PlayerOne: PlayerOneReducer,
  },
});
