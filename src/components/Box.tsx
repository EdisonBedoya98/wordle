import { BoxProps } from "../models/interfaces/words.interface";

export function Box({
  word,
  color = "default",
  textColor = "black",
  onClick,
}: BoxProps) {
  const colors = {
    green: "bg-green",
    yellow: "bg-yellow",
    gray: "bg-gray",
    default: "bg-[#939B9F4D]/30 dark:bg-[#939B9F4D]/20",
  };
  const textColorTailwind = textColor === "white" ? "text-white" : "text-black";
  return (
    <div
      className={`${colors[color]} ${textColorTailwind} max-w-[76px]  w-full h-[76px] flex justify-center items-center rounded-m font-extrabold text-3xl`}
      onClick={() => onClick && onClick(word)}
    >
      <span className="uppercase">{word}</span>
    </div>
  );
}
