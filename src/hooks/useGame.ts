import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import { addNewLetterToDashboard } from "../reducers/words/words.actions";
import { selectLettersDashboard } from "../reducers/words/words.selectors";

export function useGame() {
  const dispatch = useAppDispatch();
  const selectedLettersDashboard = useSelector(selectLettersDashboard);

  const addNewLetterToTheDashboard = (letter: string) => {
    console.log("IS CALLING");

    dispatch(addNewLetterToDashboard(letter));
  };

  return {
    addNewLetterToTheDashboard,
    selectedLettersDashboard,
  };
}
