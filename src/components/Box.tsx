interface BoxProps {
  word: string;
  color?: "green" | "yellow" | "gray" | "white";
  textColor?: "white" | "black";
}
export function Box({ word, color = "white", textColor = "black" }: BoxProps) {
  const colors = {
    green: "bg-green",
    yellow: "bg-yellow",
    gray: "bg-gray",
    white: "bg-white",
  };
  const textColorTailwind = textColor === "white" ? "text-white" : "text-black";
  return (
    <div
      className={`${colors[color]} ${textColorTailwind} max-w-[76px]  w-full h-[76px] flex justify-center items-center rounded-m font-extrabold text-3xl`}
    >
      <span>{word}</span>
    </div>
  );
}
