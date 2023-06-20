import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { WordsService } from "./words.service";
import { LetterBox, WordsData } from "../../models/interfaces/wordle.interface";

export const fetchWordsData = createAsyncThunk<WordsData>(
  "words/fetchWordsData",
  WordsService.getAllWords
);

export const setAWordRandomly = createAction("words/setAWordRandomly");

export const showHowToPlayModal = createAction<boolean>(
  "words/showHowToPlayModal"
);
export const showStatisticsModal = createAction<boolean>(
  "words/showStatisticsModal"
);
export const addNewLetterToDashboard = createAction<LetterBox>(
  "words/addNewLetterToDashboard"
);
export const removeLetterOfTheDashboard = createAction(
  "words/removeLetterOfTheDashboard"
);
export const validateWord = createAction("words/validateWord");

export const clearGame = createAction(
  "words/selectAnotherWordAndCleanDashboard"
);
export const setTimeUpdatedRandomWordAndCleanDashboard = createAction<string>(
  "words/setTimeUpdateRandomWordAndCleanDashboard"
);
