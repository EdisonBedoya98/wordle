import {
  keyboardKeysFirstRow,
  keyboardKeysSecondRow,
  keyboardKeysThirdRow,
} from "../constants/keyboardkeys";
import deleteButtonLogo from "../assets/delete.svg";
import { Key } from "./Key";
import { useKeyBoard } from "../hooks/useKeyBoard";
import { DELETEKEY, ENTERKEY } from "../constants/contants";

export const Keyboard = () => {
  const { handleKeyPress } = useKeyBoard();
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
        <Key value={ENTERKEY} onClick={handleKeyPress} />
        {keyboardKeysThirdRow.map((value) => (
          <Key key={value} value={value} onClick={handleKeyPress} />
        ))}
        <Key value={DELETEKEY} onClick={handleKeyPress}>
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
