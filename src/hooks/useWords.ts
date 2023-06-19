import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";

import {
  fetchWordsData,
  selectRandomWordAndCleanDashboard,
  setAWordRandomly,
  setTimeUpdatedRandomWordAndCleanDashboard,
  showHowToPlayModal,
  showStatisticsModal,
} from "../reducers/words/words.actions";
import {
  selectShowHowToPlayModal,
  selectDictionary,
  selectCurrentWordAddingToDashboard,
  selectShowStatisticsModal,
} from "../reducers/words/words.selectors";
import { useLocalStorage } from "./useLocalStorage";
import { TIMEINTERVALTOUPDATEWORD } from "../constants/contants";

export function useWords() {
  const dispatch = useAppDispatch();

  const settledDictionary = useSelector(selectDictionary);
  const selectedShowHowToPlayModal = useSelector(selectShowHowToPlayModal);
  const selectedShowStatisticsModal = useSelector(selectShowStatisticsModal);
  const selectedCurrentWordAddingToDashboard = useSelector(
    selectCurrentWordAddingToDashboard
  );
  const { isKeyInLocalStorage, setLocalStorageItem } = useLocalStorage();

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
    dispatch(selectRandomWordAndCleanDashboard());
    dispatch(setAWordRandomly());
    //console.log("Timer triggered");
  };

  useEffect(() => {
    settledDictionary.length && dispatch(setAWordRandomly());
  }, [settledDictionary]);

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
    console.log("CERRANDOOO");

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
