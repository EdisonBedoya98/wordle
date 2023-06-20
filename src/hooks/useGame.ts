import { useAppDispatch } from "../app/hooks";
import { useSelector } from "react-redux";
import {
  addNewLetterToDashboard,
  removeLetterOfTheDashboard,
} from "../reducers/words/wordle.actions";
import { selectLettersDashboard } from "../reducers/words/wordle.selectors";
import { LetterBox } from "../models/interfaces/wordle.interface";

export function useGame() {
  const dispatch = useAppDispatch();
  const selectedLettersDashboard = useSelector(selectLettersDashboard);

  const addNewLetterToTheDashboard = (letter: LetterBox) => {
    dispatch(addNewLetterToDashboard(letter));
  };
  const deleteLetterFromTheDashboard = () => {
    dispatch(removeLetterOfTheDashboard());
  };

  return {
    addNewLetterToTheDashboard,
    deleteLetterFromTheDashboard,
    selectedLettersDashboard,
  };
}
