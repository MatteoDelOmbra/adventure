import { Action, configureStore, Store, ThunkAction } from "@reduxjs/toolkit";
import { CurrencyApiSlice } from "./api/currencyApiSlice";
import heroesSlice from "./heroes/heroesSlice";

export const store: Store = configureStore({
  reducer: {
    heroes: heroesSlice,
    [CurrencyApiSlice.reducerPath]: CurrencyApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(CurrencyApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
