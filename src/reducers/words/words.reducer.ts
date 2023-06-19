import { createReducer } from "@reduxjs/toolkit";

import {
  fetchWordsData,
  setAWordRandomly,
  showHowToPlayModal,
} from "./words.actions";

interface WordsState {
  words: string[];
  currentWord: string | null;
  loading: boolean;
  error: null | unknown;
  showHowToPlayModal: boolean;
  /*  selectedMonster: Monster | null;
  selectedMachineMonster: Monster | null;
  winner: MonsterWinner | null; */
}

const initialState: WordsState = {
  words: [],
  currentWord: null,
  loading: false,
  error: null,
  showHowToPlayModal: false,
  /* selectedMonster: null,
  selectedMachineMonster: null,
  winner: null, */
};

export const wordsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchWordsData.pending, (state) => ({
    ...state,
    loading: true,
    words: [],
  }));

  builder.addCase(fetchWordsData.rejected, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    words: [],
  }));

  builder.addCase(fetchWordsData.fulfilled, (state, action) => ({
    ...state,
    words: action.payload.words,
    error: null,
    loading: false,
  }));

  builder.addCase(setAWordRandomly, (state) => {
    const { words } = state;

    if (words.length === 0) {
      return { ...state, currentWord: null };
    }

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    return {
      ...state,
      currentWord: randomWord,
    };
  });
  builder.addCase(showHowToPlayModal, (state, action) => ({
    ...state,
    showHowToPlayModal: action.payload,
  }));
});
