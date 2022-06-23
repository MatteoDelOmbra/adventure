import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import heroesSlice from '../features/heroes/heroesSlice';
// import heroesReducer from '../features/heroes/heroesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    heroes: heroesSlice
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
