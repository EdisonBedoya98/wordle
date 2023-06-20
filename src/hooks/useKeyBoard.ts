import { toast } from "react-toastify";
import { DELETEKEY, ENTERKEY, WORDLENGTH } from "../constants/contants";
import { useGame } from "./useGame";
import { useAppDispatch } from "../app/hooks";
import { validateWord } from "../reducers/words/wordle.actions";
import { useSelector } from "react-redux";
import { selectCurrentWordAddingToDashboard } from "../reducers/words/wordle.selectors";

export function useKeyBoard() {
  const { addNewLetterToTheDashboard, deleteLetterFromTheDashboard } =
    useGame();

  const selectedCurrentWordAddingToDashboard = useSelector(
    selectCurrentWordAddingToDashboard
  );
  const dispatch = useAppDispatch();

  const handleKeyPress = (key: string) => {
    if (key === DELETEKEY) {
      deleteLetterFromTheDashboard();
    } else if (key === ENTERKEY) {
      if (selectedCurrentWordAddingToDashboard.length === WORDLENGTH) {
        dispatch(validateWord());
      } else {
        toast("No hay suficiente letras", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      addNewLetterToTheDashboard({ letter: key });
    }
  };
  return {
    handleKeyPress,
  };
}
