import {
  keyboardKeysFirstRow,
  keyboardKeysSecondRow,
  keyboardKeysThirdRow,
} from "../constants/keyboardkeys";
import deleteButtonLogo from "../assets/delete.svg";
import { Key } from "./Key";
import { useAppDispatch } from "../app/hooks";
import { addNewLetterToDashboard } from "../reducers/words/words.actions";

export const Keyboard = () => {
  const dispatch = useAppDispatch();

  const handleKeyPress = (key: string) => {
    if (key === "Delete") {
      alert("Delete");
    } else if (key === "Enter") {
      alert("Enter");
    } else {
      dispatch(addNewLetterToDashboard(key));
      console.log(`Pressed key: ${key}`);
    }
  };
  return (
    <div className="bg-background dark:bg-[#DADCE008] grid gap-y-2 px-5 py-8 max-w-[638px] rounded-2xl mx-auto ">
      <div className="flex gap-x-2 ml-12">
        {keyboardKeysFirstRow.map((value) => (
          <Key key={value} value={value} onClick={handleKeyPress} />
        ))}
      </div>
      <div className="flex gap-x-2 ml-16">
        {keyboardKeysSecondRow.map((value) => (
          <Key key={value} value={value} onClick={handleKeyPress} />
        ))}
      </div>
      <div className="flex gap-x-2">
        <Key value="Enter" onClick={handleKeyPress} />
        {keyboardKeysThirdRow.map((value) => (
          <Key key={value} value={value} onClick={handleKeyPress} />
        ))}
        <Key value="Delete" onClick={handleKeyPress}>
          <img
            src={deleteButtonLogo}
            alt="Delete"
            className="px-2 dark:invert"
          />
        </Key>
      </div>
    </div>
  );
};
