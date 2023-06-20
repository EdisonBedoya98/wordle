import { ButtonProps } from "../models/interfaces/wordle.interface";

export function Button({ content, className, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-green rounded-m py-2 px-2 ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
