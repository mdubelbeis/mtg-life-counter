import { configureStore } from "@reduxjs/toolkit";
import PlayerFourReducer from "./commander/PlayerFourSlice";
import PlayerThreeReducer from "./commander/PlayerThreeSlice";
import PlayerTwoReducer from "./commander/PlayerTwoSlice";
import PlayerOneReducer from "./commander/PlayerOneSlice";

export const store = configureStore({
  reducer: {
    PlayerOne: PlayerOneReducer,
    PlayerTwo: PlayerTwoReducer,
    PlayerThree: PlayerThreeReducer,
    PlayerFour: PlayerFourReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
