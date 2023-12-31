import helpLogo from "../assets/help.svg";

import equalizerLogo from "../assets/equalizer.svg";
import { Box } from "../components/Box";
import { Keyboard } from "../components/KeyBoard";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { StatisticsPopUp } from "../components/StatisticsPopUp";
import { HowToPlay } from "../components/HowToPlay";
import { useWordle } from "../hooks/useWordle";
import { useGame } from "../hooks/useGame";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from "../components/Loading";
export function Dashboard() {
  const {
    selectedShowHowToPlayModal,
    setShowHowToPlayModal,
    setShowStatisticsModal,
    selectedShowStatisticsModal,
    isLoading,
    isError,
  } = useWordle();

  const { selectedLettersDashboard } = useGame();

  if (isLoading) return <Loading />;
  if (isError) return <div>Something went wrong</div>;
  return (
    <section className="w-full  grid dark:bg-dark-background dark:text-white justify-center min-w-fit">
      <div className="max-w-[638px] pt-20 pb-44">
        <div className="flex bg-background dark:bg-[#DADCE008] mb-20 w-full justify-between px-5 rounded-2xl">
          <img
            src={helpLogo}
            alt="Help"
            className="cursor-pointer dark:invert "
            onClick={() => setShowHowToPlayModal(true)}
          />
          <h1 className="font-semibold text-[40px] ml-10 dark:text-[#E5E5E5]">
            WORDLE
          </h1>
          <div className="flex gap-x-3">
            <img
              src={equalizerLogo}
              alt="Equalizer"
              className="cursor-pointer dark:invert "
              onClick={() => setShowStatisticsModal(true)}
            />
            <ThemeSwitcher />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 max-w-[424px] mb-14 mx-auto ">
          {selectedLettersDashboard.map((letter, index) => (
            <Box
              key={index}
              word={letter.letter}
              color={letter.color}
              textColor="white"
            />
          ))}
        </div>
        <Keyboard />
      </div>
      {selectedShowStatisticsModal && (
        <StatisticsPopUp onClose={() => setShowStatisticsModal(false)} />
      )}
      {selectedShowHowToPlayModal && (
        <HowToPlay onClose={() => setShowHowToPlayModal(false)} />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
}
