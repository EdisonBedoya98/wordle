import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { WordsService } from "./words.service";
import { LetterBox, WordsData } from "../../models/interfaces/wordle.interface";
/* import {
  Monster,
  MonsterWinner,
  startBattleParams,
} from "../../models/interfaces/monster.interface";
import { MonsterService } from "./monsters.service";

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  "monsters/fetchMonstersData",
  MonsterService.getAll
);
export const startBattleRequest = createAsyncThunk<
  MonsterWinner,
  startBattleParams
>("monsters/startBattleRequest", async (idMonsterSelect: startBattleParams) => {
  return MonsterService.startBattle(idMonsterSelect);
}); */

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

export const selectRandomWordAndCleanDashboard = createAction(
  "words/selectAnotherWordAndCleanDashboard"
);
export const setTimeUpdatedRandomWordAndCleanDashboard = createAction<string>(
  "words/setTimeUpdateRandomWordAndCleanDashboard"
);

/* export const setMachineMonsterRandomly = createAction(
  "monsters/setMachineMonsterRandomly"
);
 */
