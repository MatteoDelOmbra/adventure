import { Action, configureStore, Store, ThunkAction } from "@reduxjs/toolkit";
import heroesSlice from "./heroes/heroesSlice";

export const store: Store = configureStore({
  reducer: {
    heroes: heroesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
