import { RootState } from "../../app/store";

export const selectCurrentRandomWordFromDictionary = (state: RootState) =>
  state.words.currentRandomWordFromDictionary;
export const selectDictionary = (state: RootState) => state.words.dictionary;
export const selectShowHowToPlayModal = (state: RootState) =>
  state.words.showHowToPlayModal;
export const selectLettersDashboard = (state: RootState) =>
  state.words.lettersDashboard;
export const selectCurrentWordAddingToDashboard = (state: RootState) =>
  state.words.currentWordAddingToDashboard;
export const selectShowStatisticsModal = (state: RootState) =>
  state.words.showStatisticsModal;
export const selectNumberOfMatches = (state: RootState) =>
  state.words.numberOfMatches;
export const selectNumberOfVictories = (state: RootState) =>
  state.words.numberOfVictories;
export const selectShowRandomWordToPlayer = (state: RootState) =>
  state.words.showRandomWordToPlayer;
export const selectTimeOfLastUpdate = (state: RootState) =>
  state.words.timeOfLastUpdate;
export const selectPreviosAskedRandomWord = (state: RootState) =>
  state.words.previosRandomWordAsked;
export const selectLoading = (state: RootState) => state.words.loading;
export const selectIsError = (state: RootState) => state.words.error;
