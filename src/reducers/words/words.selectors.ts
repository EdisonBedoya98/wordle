import { RootState } from "../../app/store";

export const selectCurrentWordFromDictionary = (state: RootState) =>
  state.words.currentWordFromDictionary;
export const selectDictionary = (state: RootState) => state.words.dictionary;
export const selectShowHowToPlayModal = (state: RootState) =>
  state.words.showHowToPlayModal;
export const selectLettersDashboard = (state: RootState) =>
  state.words.lettersDashboard;
export const selectCurrentWordAddingToDashboard = (state: RootState) =>
  state.words.currentWordAddingToDashboard;

/* export const selectSelectedMonster = (state: RootState) =>
  state.monsters.selectedMonster;

export const selectSelectedMachineMonster = (state: RootState) =>
  state.monsters.selectedMachineMonster;

export const selectedWinner = (state: RootState) => state.monsters.winner; */
