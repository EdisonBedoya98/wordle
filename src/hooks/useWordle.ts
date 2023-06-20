import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";

import {
  fetchWordsData,
  clearGame,
  setAWordRandomly,
  setTimeUpdatedRandomWordAndCleanDashboard,
  showHowToPlayModal,
  showStatisticsModal,
} from "../reducers/words/wordle.actions";
import {
  selectShowHowToPlayModal,
  selectDictionary,
  selectShowStatisticsModal,
  selectNumberOfMatches,
  selectLoading,
  selectIsError,
} from "../reducers/words/wordle.selectors";
import { useLocalStorage } from "./useLocalStorage";
import { TIMEINTERVALTOUPDATEWORD } from "../constants/contants";

export function useWordle() {
  const dispatch = useAppDispatch();

  const settledDictionary = useSelector(selectDictionary);
  const selectedShowHowToPlayModal = useSelector(selectShowHowToPlayModal);
  const selectedShowStatisticsModal = useSelector(selectShowStatisticsModal);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);
  const numberOfMatches = useSelector(selectNumberOfMatches);
  const { isKeyInLocalStorage, setLocalStorageItem } = useLocalStorage();

  useEffect(() => {
    settledDictionary.length && dispatch(setAWordRandomly());
  }, [settledDictionary]);

  useEffect(() => {
    numberOfMatches && selectAnotherWordAndCleanDashboard();
  }, [numberOfMatches]);

  useEffect(() => {
    dispatch(fetchWordsData());
    const isFisrtTime = validateIfIsTheFirstTimeUserHasVisitedTheGame();
    isFisrtTime && setShowHowToPlayModal(true);
  }, []);

  useEffect(() => {
    const timerId = setInterval(
      selectAnotherWordAndCleanDashboard,
      TIMEINTERVALTOUPDATEWORD
    );
    return () => clearInterval(timerId);
  }, []);

  const selectAnotherWordAndCleanDashboard = () => {
    dispatch(
      setTimeUpdatedRandomWordAndCleanDashboard(new Date().toISOString())
    );
    dispatch(clearGame());

    dispatch(setAWordRandomly());
  };

  const validateIfIsTheFirstTimeUserHasVisitedTheGame = () => {
    if (!isKeyInLocalStorage("firstTime")) {
      setLocalStorageItem("firstTime", "false");
      return true;
    } else {
      return false;
    }
  };

  const setShowHowToPlayModal = (show: boolean) => {
    dispatch(showHowToPlayModal(show));
  };
  const setShowStatisticsModal = (show: boolean) => {
    dispatch(showStatisticsModal(show));
  };

  return {
    selectedShowHowToPlayModal,
    setShowHowToPlayModal,
    setShowStatisticsModal,
    selectedShowStatisticsModal,
    isLoading,
    isError,
  };
}
