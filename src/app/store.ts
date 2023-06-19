import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { wordsReducer } from "../reducers/words/words.reducer";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
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
