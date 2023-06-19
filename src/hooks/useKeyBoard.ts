import { toast } from "react-toastify";
import { WORDLENGTH } from "../constants/contants";
import { useGame } from "./useGame";
import { useWords } from "./useWords";
import { useAppDispatch } from "../app/hooks";
import { validateWord } from "../reducers/words/words.actions";

export function useKeyBoard() {
  const { addNewLetterToTheDashboard, deleteLetterFromTheDashboard } =
    useGame();
  const { selectedCurrentWordAddingToDashboard } = useWords();
  const dispatch = useAppDispatch();

  const handleKeyPress = (key: string) => {
    if (key === "Delete") {
      deleteLetterFromTheDashboard();
    } else if (key === "Enter") {
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
