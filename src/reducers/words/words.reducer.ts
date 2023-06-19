import { createReducer } from "@reduxjs/toolkit";

import {
  addNewLetterToDashboard,
  fetchWordsData,
  removeLetterOfTheDashboard,
  setAWordRandomly,
  showHowToPlayModal,
} from "./words.actions";

interface WordsState {
  words: string[];
  currentWord: string | null;
  lettersDashboard: string[];
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
  lettersDashboard: [],
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

  builder.addCase(showHowToPlayModal, (state, action) => ({
    ...state,
    showHowToPlayModal: action.payload,
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

  builder.addCase(addNewLetterToDashboard, (state, action) => {
    console.log("addNewLetterToDashboard");

    if (state.lettersDashboard.length % 5) {
      console.log("5 letters");
    }
    return {
      ...state,
      lettersDashboard: [...state.lettersDashboard, action.payload],
    };
  });
  builder.addCase(removeLetterOfTheDashboard, (state) => ({
    ...state,
    lettersDashboard: state.lettersDashboard.slice(0, -1),
  }));
});
