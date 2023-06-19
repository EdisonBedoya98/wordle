import { createReducer } from "@reduxjs/toolkit";

import {
  addNewLetterToDashboard,
  fetchWordsData,
  removeLetterOfTheDashboard,
  setAWordRandomly,
  showHowToPlayModal,
  validateWord,
} from "./words.actions";
import { WordsState } from "../../models/interfaces/words.interface";
import { WORDLENGTH } from "../../constants/contants";

const initialState: WordsState = {
  dictionary: [],
  currentWordFromDictionary: null,
  lettersDashboard: Array(25).fill({
    letter: "",
    color: "default",
  }),
  currentWordAddingToDashboard: "",
  currentRowDashboard: 0,
  currentIndexDashboard: 0,
  isGameOver: false,
  loading: false,
  error: null,
  showHowToPlayModal: false,
};

export const wordsReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchWordsData.pending, (state) => ({
    ...state,
    loading: true,
    dictionary: [],
  }));

  builder.addCase(fetchWordsData.rejected, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
    dictionary: [],
  }));

  builder.addCase(fetchWordsData.fulfilled, (state, action) => ({
    ...state,
    dictionary: action.payload.words,
    error: null,
    loading: false,
  }));

  builder.addCase(showHowToPlayModal, (state, action) => ({
    ...state,
    showHowToPlayModal: action.payload,
  }));
  builder.addCase(setAWordRandomly, (state) => {
    const { dictionary: words } = state;

    if (words.length === 0) {
      return { ...state, currentWordFromDictionary: null };
    }

    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    return {
      ...state,
      currentWordFromDictionary: randomWord.toUpperCase(),
    };
  });

  builder.addCase(addNewLetterToDashboard, (state, action) => {
    const {
      lettersDashboard,
      currentWordAddingToDashboard,
      currentIndexDashboard,
    } = state;

    const isEnabledToAddNewLetter =
      currentWordAddingToDashboard.length < WORDLENGTH;

    if (!isEnabledToAddNewLetter) {
      console.log("IS NOT ALLOWED TO ADD NEW LETTER");

      return state;
    }
    const updatedDashboard = lettersDashboard.map((letter) => ({ ...letter }));
    updatedDashboard[currentIndexDashboard] = action.payload;

    return {
      ...state,
      lettersDashboard: updatedDashboard,
      currentWordAddingToDashboard:
        currentWordAddingToDashboard + action.payload.letter.toUpperCase(),
      currentIndexDashboard: currentIndexDashboard + 1,
    };
  });
  builder.addCase(removeLetterOfTheDashboard, (state) => {
    const {
      lettersDashboard,
      currentIndexDashboard,
      currentWordAddingToDashboard,
    } = state;

    const isAllowedToDeleteLetter = currentWordAddingToDashboard.length > 0;
    if (!isAllowedToDeleteLetter) {
      console.log("not allowed");

      return state;
    }
    const updatedDashboard = lettersDashboard.map((letter) => ({ ...letter }));
    updatedDashboard[currentIndexDashboard - 1] = { letter: "" };

    return {
      ...state,
      lettersDashboard: updatedDashboard,
      currentWordAddingToDashboard: currentWordAddingToDashboard.slice(0, -1),
      currentIndexDashboard: currentIndexDashboard - 1,
    };
  });

  builder.addCase(validateWord, (state) => {
    const {
      lettersDashboard,
      currentWordFromDictionary,
      currentIndexDashboard,
      currentWordAddingToDashboard,
    } = state;

    console.log(
      "🚀 ~ file: words.reducer.ts:119 ~ builder.addCase ~ currentWord:",
      currentWordFromDictionary
    );
    const lettersDashboardUpdated = lettersDashboard.map((letter) => ({
      ...letter,
    }));
    console.log(
      "🚀 ~ file: words.reducer.ts:148 ~ builder.addCase ~ lettersDashboardUpdated:",
      lettersDashboardUpdated
    );
    if (currentWordFromDictionary === currentWordAddingToDashboard) {
      console.log("SON IGUALESSS. GAME OVER");
      //It shoudl paint of green the whole word
      for (
        let i = currentIndexDashboard - WORDLENGTH;
        i < currentIndexDashboard;
        i++
      ) {
        lettersDashboardUpdated[i].color = "green";
      }

      return {
        ...state,
        lettersDashboard: lettersDashboardUpdated,
        isGameOver: true,
      };
    } else {
      currentWordAddingToDashboard.split("").forEach((letter, index) => {
        console.log(
          "🚀 ~ file: words.reducer.ts:161 ~ currentWordAddingToDashboard.split ~ letter:",
          letter
        );
        console.log(
          "🚀 ~ file: words.reducer.ts:188 ~ currentWordAddingToDashboard.split ~ currentWordFromDictionary:",
          currentWordFromDictionary
        );
        console.log(
          "🚀 ~ file: words.reducer.ts:170 ~ currentWordAddingToDashboard.split ~ currentWordFromDictionary?.includes(letter):",
          currentWordFromDictionary?.includes(letter.toUpperCase())
        );
        if (letter === currentWordFromDictionary?.[index]) {
          lettersDashboardUpdated[
            currentIndexDashboard - WORDLENGTH + index
          ].color = "green";
        } else if (currentWordFromDictionary?.includes(letter)) {
          lettersDashboardUpdated[
            currentIndexDashboard - WORDLENGTH + index
          ].color = "yellow";
        } else {
          console.log(
            "Validando...",
            lettersDashboardUpdated[currentIndexDashboard - WORDLENGTH + index]
              .color
          );
          lettersDashboardUpdated[
            currentIndexDashboard - WORDLENGTH + index
          ].color = "gray";
        }
      });
      return {
        ...state,
        lettersDashboard: lettersDashboardUpdated,
      };
    }
  });
});
