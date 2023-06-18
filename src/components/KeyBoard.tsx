import {
  keyboardKeysFirstRow,
  keyboardKeysSecondRow,
  keyboardKeysThirdRow,
} from "../constants/keyboardkeys";
import deleteButtonLogo from "../assets/delete.svg";
import { Key } from "./Key";

export const Keyboard = () => {
  const handleKeyPress = (key: string) => {
    if (key === "Delete") {
      alert("Delete");
    } else if (key === "Enter") {
      alert("Enter");
    } else {
      console.log(`Pressed key: ${key}`);
    }
  };
  return (
    <div className="bg-background grid gap-y-2 px-5 py-8 max-w-[638px] rounded-2xl mx-auto ">
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
          <img src={deleteButtonLogo} alt="Delete" className="px-2" />
        </Key>
      </div>
    </div>
  );
};
