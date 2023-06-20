import { useSelector } from "react-redux";
import {
  selectCurrentRandomWordFromDictionary,
  selectNumberOfMatches,
  selectNumberOfVictories,
  selectShowRandomWordToPlayer,
  selectTimeOfLastUpdate,
} from "../reducers/words/wordle.selectors";
import { Button } from "./Button";
import { PopUp } from "./PopUp";
import { CountdownTimer } from "./CountDownTimer";
import { StatisticsPopUpProps } from "../models/interfaces/wordle.interface";

export function StatisticsPopUp({ onClose }: StatisticsPopUpProps) {
  const selectedNumberOfVictories = useSelector(selectNumberOfVictories);
  const selectedNumberOfMatches = useSelector(selectNumberOfMatches);
  const timeOfLastUpdate = useSelector(selectTimeOfLastUpdate);
  const showRandomWordToPlayer = useSelector(selectShowRandomWordToPlayer);
  const currentRandomWordFromDictionary = useSelector(
    selectCurrentRandomWordFromDictionary
  );

  return (
    <PopUp>
      <h2 className="mb-11 font-extrabold text-3xl">Estadísticas</h2>
      <div className="flex gap-x-52 mb-11">
        <div className="grid justify-items-center">
          <span className="block font-extrabold text-3xl">
            {selectedNumberOfMatches}
          </span>
          <span>Jugadas</span>
        </div>
        <div className="grid justify-items-center">
          <span className="block font-extrabold text-3xl">
            {selectedNumberOfVictories}
          </span>
          <span>Victorias</span>
        </div>
      </div>
      {showRandomWordToPlayer && (
        <p className="mb-4">
          La palabra era:{" "}
          <span className="font-bold uppercase">
            {currentRandomWordFromDictionary}
          </span>
        </p>
      )}
      <p>SIGUIENTE PALABRA</p>

      <CountdownTimer targetDate={timeOfLastUpdate} />
      <Button
        content="Aceptar"
        className="px-20 text-white "
        onClick={onClose}
      />
    </PopUp>
  );
}
