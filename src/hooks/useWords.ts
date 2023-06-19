import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
/* import {
  selectMonsters,
  selectSelectedMachineMonster,
  selectSelectedMonster,
} from "../reducers/monsters/monsters.selectors";
import {
  fetchMonstersData,
  setMachineMonsterRandomly,
} from "../reducers/monsters/monsters.actions"; */
import {
  fetchWordsData,
  setAWordRandomly,
  showHowToPlayModal,
} from "../reducers/words/words.actions";
import {
  selectCurrentWord,
  selectShowHowToPlayModal,
  selectWords,
} from "../reducers/words/words.selectors";
import { useLocalStorage } from "./useLocalStorage";

export function useWords() {
  const dispatch = useAppDispatch();
  const currentWord = useSelector(selectCurrentWord);
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
    currentWord,
    selectedShowHowToPlayModal,
    setShowHowToPlayModal,
  };
}
