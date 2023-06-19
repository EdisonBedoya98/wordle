import { PopUpProps } from "../models/interfaces/wordle.interface";

export function PopUp({ children }: PopUpProps) {
  return (
    <div className="w-screen min-w-fit h-full min-h-screen py-14 bg-white/90 dark:bg-dark-background/70 fixed  grid justify-center items-center overflow-y-auto">
      <div className="bg-white-background/90 dark:bg-dark-background p-11 grid justify-items-center border border-black dark:border-gray rounded-2xl">
        {children}
      </div>
    </div>
  );
}
