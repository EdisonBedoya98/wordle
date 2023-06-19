import helpLogo from "../assets/help.svg";

import equalizerLogo from "../assets/equalizer.svg";
import { Box } from "../components/Box";
import { Keyboard } from "../components/KeyBoard";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { StatisticsPopUp } from "../components/StatisticsPopUp";
import { HowToPlay } from "../components/HowToPlay";
import { useState } from "react";
import { useWords } from "../hooks/useWords";
export function Dashboard() {
  const [isShowHowToPlay, setisShowHowToPlay] = useState(false);
  const [isShowStatistics, setisShowStatistics] = useState(false);

  const { currentWord } = useWords();

  return (
    <section className="w-full  grid dark:bg-dark-background dark:text-white justify-center min-w-fit">
      <div className="max-w-[638px] pt-20 pb-44">
        <div className="flex bg-background dark:bg-[#DADCE008] mb-20 w-full justify-between px-5 rounded-2xl">
          <img
            src={helpLogo}
            alt="Help"
            className="cursor-pointer dark:invert "
            onClick={() => setisShowHowToPlay(true)}
          />
          <h1 className="font-semibold text-[40px] ml-10 dark:text-[#E5E5E5]">
            WORDLE
          </h1>
          <div className="flex gap-x-3">
            <img
              src={equalizerLogo}
              alt="Equalizer"
              className="cursor-pointer dark:invert "
              onClick={() => setisShowStatistics(true)}
            />
            <ThemeSwitcher />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 max-w-[424px] mb-14 mx-auto ">
          {Array(25)
            .fill(1)
            .map((_, index) => (
              <Box key={index} word="G" color="green" textColor="white" />
            ))}
        </div>
        <Keyboard />
      </div>
      {isShowStatistics && (
        <StatisticsPopUp onClose={() => setisShowStatistics(false)} />
      )}
      {isShowHowToPlay && (
        <HowToPlay onClose={() => setisShowHowToPlay(false)} />
      )}
    </section>
  );
}
