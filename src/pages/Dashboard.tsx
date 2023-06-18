import helpLogo from "../assets/help.svg";

import equalizer from "../assets/equalizer.svg";
import { Box } from "../components/Box";
import { Keyboard } from "../components/KeyBoard";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
export function Dashboard() {
  return (
    <section className="w-full grid justify-center min-w-fit">
      <div className="max-w-[638px] pt-20 pb-44">
        <div className="flex bg-background mb-20 w-full justify-between px-5">
          <img src={helpLogo} alt="Help" className="cursor-pointer" />
          <h1 className="font-semibold text-[40px]">WORDLE</h1>
          <div className="flex gap-x-3">
            <img src={equalizer} alt="Equalizer" className="cursor-pointer" />
            <ThemeSwitcher />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3 max-w-[424px] mb-14 mx-auto ">
          {Array(25)
            .fill(1)
            .map((_, index) => (
              <Box key={index} word="G" color="green" />
            ))}
        </div>
        <Keyboard />
      </div>
    </section>
  );
}
