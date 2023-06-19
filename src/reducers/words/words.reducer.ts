import { createReducer } from "@reduxjs/toolkit";

import {
  addNewLetterToDashboard,
  fetchWordsData,
  removeLetterOfTheDashboard,
  setAWordRandomly,
  showHowToPlayModal,
} from "./words.actions";
import { LetterBox, WordsState } from "../../models/interfaces/words.interface";

const defaultLetterBoxDashboard: LetterBox = {
  letter: "",
  color: "gray",
};
const initialState: WordsState = {
  words: [],
  currentWord: null,
  lettersDashboard: Array(25).fill(defaultLetterBoxDashboard),
  currentWordLength: 0,
  currentRowDashboard: 0,
  currentIndexDashboard: 0,
  loading: false,
  error: null,
  showHowToPlayModal: false,
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
    const { lettersDashboard, currentWordLength, currentIndexDashboard } =
      state;

    const isEnabledToAddNewLetter = currentWordLength < 5;

    if (!isEnabledToAddNewLetter) {
      console.log("IS NOT ALLOWED TO ADD NEW LETTER");

      return state;
    }
    const updatedDashboard = [...lettersDashboard];
    updatedDashboard[currentIndexDashboard] = action.payload;
    return {
      ...state,
      lettersDashboard: updatedDashboard,
      currentWordLength: currentWordLength + 1,
      currentIndexDashboard: currentIndexDashboard + 1,
    };
  });
  builder.addCase(removeLetterOfTheDashboard, (state) => {
    const { lettersDashboard, currentIndexDashboard, currentWordLength } =
      state;

    const isAllowedToDeleteLetter = currentWordLength > 0;
    if (!isAllowedToDeleteLetter) {
      console.log("not allowed");

      return state;
    }
    const updatedDashboard = [...lettersDashboard];
    updatedDashboard[currentIndexDashboard - 1] = defaultLetterBoxDashboard;

    return {
      ...state,
      lettersDashboard: updatedDashboard,
      currentWordLength: currentWordLength - 1,
      currentIndexDashboard: currentIndexDashboard - 1,
    };
  });
});
