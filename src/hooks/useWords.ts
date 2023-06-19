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
  selectWords,
} from "../reducers/words/words.selectors";
import { useLocalStorage } from "./useLocalStorage";

export function useWords() {
  const dispatch = useAppDispatch();

  const settledWords = useSelector(selectWords);
  const selectedShowHowToPlayModal = useSelector(selectShowHowToPlayModal);
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
    setShowHowToPlayModal,
  };
}
