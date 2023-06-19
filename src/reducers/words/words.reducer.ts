import { createReducer } from "@reduxjs/toolkit";

import {
  addNewLetterToDashboard,
  fetchWordsData,
  removeLetterOfTheDashboard,
  selectRandomWordAndCleanDashboard,
  setAWordRandomly,
  setTimeUpdatedRandomWordAndCleanDashboard,
  showHowToPlayModal,
  showStatisticsModal,
  validateWord,
} from "./words.actions";
import { WordsState } from "../../models/interfaces/wordle.interface";
import { WORDLENGTH } from "../../constants/contants";

const initialState: WordsState = {
  dictionary: [],
  currentRandomWordFromDictionary: null,
  lettersDashboard: Array(25).fill({ letter: "" }),
  currentWordAddingToDashboard: "",
  currentIndexDashboard: 0,
  numberOfMatches: 0,
  numberOfVictories: 0,
  isGameOver: false,
  loading: false,
  error: null,
  showHowToPlayModal: false,
  showStatisticsModal: false,
  showRandomWordToPlayer: false,
  timeOfLastUpdate: new Date().toISOString(),
  alreadyAskedWords: [],
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

  builder.addCase(showStatisticsModal, (state, action) => ({
    ...state,
    showStatisticsModal: action.payload,
  }));

  builder.addCase(
    setTimeUpdatedRandomWordAndCleanDashboard,
    (state, action) => ({
      ...state,
      timeOfLastUpdate: action.payload,
    })
  );

  builder.addCase(selectRandomWordAndCleanDashboard, (state) => ({
    ...state,
    lettersDashboard: Array(25).fill({ letter: "" }),
    currentWordAddingToDashboard: "",
    currentIndexDashboard: 0,
  }));

  builder.addCase(setAWordRandomly, (state) => {
    const { dictionary, alreadyAskedWords } = state;

    if (dictionary.length === 0) {
      return { ...state, currentRandomWordFromDictionary: null };
    }

    //    const randomIndex = Math.floor(Math.random() * words.length);

    let randomWord = "";

    /* console.log(
      "🚀 ~ file: words.reducer.ts:93 ~ builder.addCase ~ alreadyAskedWords:",
      alreadyAskedWords.join(",")
    ); */
    while (alreadyAskedWords.includes(randomWord) || randomWord === "") {
      const randomIndex = Math.floor(Math.random() * dictionary.length);
      const randomWordAux = dictionary[randomIndex];
      randomWord = randomWordAux;

      //console.log("Entraaaa");
    }

    return {
      ...state,
      currentRandomWordFromDictionary: randomWord.toUpperCase(),
      alreadyAskedWords: [...alreadyAskedWords, randomWord.toUpperCase()],
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
    if (!isAllowedToDeleteLetter) return state;

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
      numberOfMatches,
      numberOfVictories,
      lettersDashboard,
      currentRandomWordFromDictionary,
      currentIndexDashboard,
      currentWordAddingToDashboard,
    } = state;

    const lettersDashboardUpdated = lettersDashboard.map((letter) => ({
      ...letter,
    }));

    const areWordsInBoxesAndCurrentWordDictionaryEqual =
      currentRandomWordFromDictionary === currentWordAddingToDashboard;
    const isLostGame =
      currentIndexDashboard === lettersDashboard.length &&
      !areWordsInBoxesAndCurrentWordDictionaryEqual;

    if (isLostGame) {
      console.log("GAME OVER, YOU LOSE");
      return {
        ...state,
        isGameOver: true,
        numberOfMatches: numberOfMatches + 1,
        showStatisticsModal: true,
        showRandomWordToPlayer: true,
      };
    } else if (areWordsInBoxesAndCurrentWordDictionaryEqual) {
      console.log("SON IGUALESSS. GAME OVER, YOU WIN");
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
        numberOfMatches: numberOfMatches + 1,
        numberOfVictories: numberOfVictories + 1,
        isGameOver: true,
        showStatisticsModal: true,
      };
    } else {
      currentWordAddingToDashboard.split("")?.forEach((letter, index) => {
        if (letter === currentRandomWordFromDictionary?.[index]) {
          lettersDashboardUpdated[
            currentIndexDashboard - WORDLENGTH + index
          ].color = "green";
        } else if (currentRandomWordFromDictionary?.includes(letter)) {
          lettersDashboardUpdated[
            currentIndexDashboard - WORDLENGTH + index
          ].color = "yellow";
        } else {
          lettersDashboardUpdated[
            currentIndexDashboard - WORDLENGTH + index
          ].color = "gray";
        }
      });
      return {
        ...state,
        lettersDashboard: lettersDashboardUpdated,
        currentWordAddingToDashboard: "",
      };
    }
  });
});
