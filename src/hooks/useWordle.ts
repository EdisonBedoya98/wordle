import { useEffect, useRef } from "react";
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
  selectCurrentWordAddingToDashboard,
  selectShowStatisticsModal,
  selectNumberOfMatches,
} from "../reducers/words/wordle.selectors";
import { useLocalStorage } from "./useLocalStorage";
import { TIMEINTERVALTOUPDATEWORD } from "../constants/contants";

export function useWordle() {
  const dispatch = useAppDispatch();

  const settledDictionary = useSelector(selectDictionary);
  const selectedShowHowToPlayModal = useSelector(selectShowHowToPlayModal);
  const selectedShowStatisticsModal = useSelector(selectShowStatisticsModal);
  const selectedCurrentWordAddingToDashboard = useSelector(
    selectCurrentWordAddingToDashboard
  );
  const numberOfMatches = useSelector(selectNumberOfMatches);
  const { isKeyInLocalStorage, setLocalStorageItem } = useLocalStorage();
  const isInitializedGameRef = useRef(false);

  useEffect(() => {
    if (settledDictionary.length && !isInitializedGameRef.current) {
      settledDictionary.length && dispatch(setAWordRandomly());
      isInitializedGameRef.current = true;
    }
  }, [settledDictionary]);

  useEffect(() => {
    isInitializedGameRef && selectAnotherWordAndCleanDashboard();
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
    selectedCurrentWordAddingToDashboard,
  };
}
