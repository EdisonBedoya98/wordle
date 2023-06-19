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
} from "../reducers/words/words.actions";
import {
  selectCurrentWord,
  selectWords,
} from "../reducers/words/words.selectors";

export function useWords() {
  const dispatch = useAppDispatch();
  const currentWord = useSelector(selectCurrentWord);
  const settledWords = useSelector(selectWords);
  /*  const monsters = useSelector(selectMonsters);
  const selectedMonster = useSelector(selectSelectedMonster);
  const selectedMachineMonster = useSelector(selectSelectedMachineMonster); */

  useEffect(() => {
    console.log("Fetching words data");

    dispatch(fetchWordsData());
  }, []);

  useEffect(() => {
    console.log("Setting a word randomly");

    dispatch(setAWordRandomly());
  }, [settledWords]);

  /*   useEffect(() => {
    dispatch(setMachineMonsterRandomly());
  }, [selectedMonster]); */

  return {
    /*    monsters,
    selectedMonster,
    selectedMachineMonster, */
    currentWord,
  };
}
