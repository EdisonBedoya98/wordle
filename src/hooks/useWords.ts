import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";

import {
  fetchWordsData,
  setAWordRandomly,
  showHowToPlayModal,
} from "../reducers/words/words.actions";
import {
  selectShowHowToPlayModal,
  selectDictionary,
  selectCurrentWordAddingToDashboard,
} from "../reducers/words/words.selectors";
import { useLocalStorage } from "./useLocalStorage";

export function useWords() {
  const dispatch = useAppDispatch();

  const settledWords = useSelector(selectDictionary);
  const selectedShowHowToPlayModal = useSelector(selectShowHowToPlayModal);
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
    dispatch(setAWordRandomly());
  }, [settledWords]);

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

  return {
    selectedShowHowToPlayModal,
    selectedCurrentWordAddingToDashboard,
    setShowHowToPlayModal,
  };
}
