import { Button } from "./Button";
import { PopUp } from "./PopUp";

interface PopUpProps {
  children: React.ReactNode;
}
export function StatisticsPopUp({ onClose }: { onClose: () => void }) {
  return (
    <PopUp>
      <h2 className="mb-11 font-extrabold text-3xl">Estadísticas</h2>
      <div className="flex gap-x-52 mb-11">
        <div className="grid justify-items-center">
          <span className="block font-extrabold text-3xl">8</span>
          <span>Jugadas</span>
        </div>
        <div className="grid justify-items-center">
          <span className="block font-extrabold text-3xl">2</span>
          <span>Victorias</span>
        </div>
      </div>
      <p className="mb-4">
        La palabra era: <span className="font-bold uppercase">Perro</span>
      </p>
      <p>SIGUIENTE PALABRA</p>
      <span className="font-bold block mb-8">04:10</span>
      <Button
        content="Aceptar"
        className="px-20 text-white "
        onClick={onClose}
      />
    </PopUp>
  );
}
