interface BoxProps {
  word: string;
  color?: "green" | "yellow" | "gray" | "white";
}
export function Box({ word, color = "white" }: BoxProps) {
  const colors = {
    green: "bg-green",
    yellow: "bg-yellow",
    gray: "bg-gray",
    white: "bg-white",
  };
  return (
    <div
      className={`${colors[color]} max-w-[76px] w-full h-[76px] flex justify-center items-center rounded-m font-extrabold text-3xl`}
    >
      <span>{word}</span>
    </div>
  );
}
