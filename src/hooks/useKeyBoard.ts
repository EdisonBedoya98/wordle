import { toast } from "react-toastify";
import { WORDLENGTH } from "../constants/contants";
import { useGame } from "./useGame";
import { useWords } from "./useWords";
import { useAppDispatch } from "../app/hooks";
import { validateWord } from "../reducers/words/words.actions";
import { useSelector } from "react-redux";
import { selectCurrentRandomWordFromDictionary } from "../reducers/words/words.selectors";

export function useKeyBoard() {
  const { addNewLetterToTheDashboard, deleteLetterFromTheDashboard } =
    useGame();
  const { selectedCurrentWordAddingToDashboard } = useWords();
  const dispatch = useAppDispatch();
  const selectedCurrentRandomWordFromDictionary = useSelector(
    selectCurrentRandomWordFromDictionary
  );
  //const currentDictionary = useSelector();

  const handleKeyPress = (key: string) => {
    if (key === "Delete") {
      deleteLetterFromTheDashboard();
    } else if (key === "Enter") {
      console.log(
        "🚀 ~ file: useKeyBoard.ts:23 ~ handleKeyPress ~ selectedCurrentWordAddingToDashboard:",
        selectedCurrentWordAddingToDashboard
      );
      if (selectedCurrentWordAddingToDashboard.length === WORDLENGTH) {
        console.log(
          "🚀 ~ file: useKeyBoard.ts:19 ~ useKeyBoard ~ selectedCurrentWordFromDictionary:",
          selectedCurrentRandomWordFromDictionary
        );
        /*     if (!currentDictionary.includes(selectedCurrentWordAddingToDashboard)) {
          toast("La palabra no existe en el diccionario", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } */
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
