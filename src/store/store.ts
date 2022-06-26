import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import heroesSlice from './heroes/heroesSlice';

export const store: Store = configureStore({
  reducer: {
    counter: counterReducer,
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
