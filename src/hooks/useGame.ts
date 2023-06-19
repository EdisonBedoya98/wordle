import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import {
  addNewLetterToDashboard,
  removeLetterOfTheDashboard,
} from "../reducers/words/words.actions";
import { selectLettersDashboard } from "../reducers/words/words.selectors";
import { LetterBox } from "../models/interfaces/words.interface";

export function useGame() {
  const dispatch = useAppDispatch();
  const selectedLettersDashboard = useSelector(selectLettersDashboard);

  const addNewLetterToTheDashboard = (letter: LetterBox) => {
    console.log("IS CALLING");

    dispatch(addNewLetterToDashboard(letter));
  };
  const deleteLetterFromTheDashboard = () => {
    console.log("IS CALLING");

    dispatch(removeLetterOfTheDashboard());
  };

  return {
    addNewLetterToTheDashboard,
    deleteLetterFromTheDashboard,
    selectedLettersDashboard,
  };
}
