import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { wordleReducer } from "../reducers/words/wordle.reducer";

export const store = configureStore({
  reducer: {
    words: wordleReducer,
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
