import { RootState } from "../../app/store";

export const selectCurrentWord = (state: RootState) => state.words.currentWord;
export const selectWords = (state: RootState) => state.words.words;

/* export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectSelectedMachineMonster = (state: RootState) =>
  state.monsters.selectedMachineMonster;

export const selectedWinner = (state: RootState) => state.monsters.winner; */
