import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { WordsService } from "./words.service";
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
export const fetchWordsData = createAsyncThunk<string[]>(
  "words/fetchWordsData",
  WordsService.getAllWords
);

export const setAWordRandomly = createAction("words/setAWordRandomly");

/* export const setMachineMonsterRandomly = createAction(
  "monsters/setMachineMonsterRandomly"
);
 */
