import { Button } from "./Button";

interface PopUpProps {
  children: React.ReactNode;
}
export function StatisticsPopUp() {
  return (
    <div className="w-screen min-w-fit h-full bg-white/90 dark:bg-dark-background/90 fixed top-0 left-0 grid justify-center items-center">
      <div className="bg-white-background/90 dark:bg-dark-background p-11 grid justify-items-center border border-black dark:border-gray rounded-2xl">
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
        <Button content="Aceptar" className="px-20 text-white " />
      </div>
    </div>
  );
}
