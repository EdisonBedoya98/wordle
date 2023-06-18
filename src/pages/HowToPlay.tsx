import { Box } from "../components/Box";
import { Button } from "../components/Button";

export function HowToPlay() {
  return (
    <section className="grid  max-w-xl mx-auto rounded-2xl pt-14 pb-6 bg-background px-10 content-center my-14 ">
      <h1 className="text-center font-extrabold text-4xl mb-8">Cómo jugar</h1>
      <article className="grid gap-y-2 mb-4">
        <p>Adivina la palabra oculta en cinco intentos. </p>
        <p>Cada intento debe ser una palabra válida de 5 letras. </p>
        <p>
          Después de cada intento el color de las letras cambia para mostrar qué
          tan cerca estás de acertar la palabra.
        </p>
      </article>

      <h5 className="font-bold mb-6">Ejemplos</h5>
      <div className="flex mb-5 gap-x-4">
        <Box word="G" color="green" />
        <Box word="A" />
        <Box word="T" />
        <Box word="O" />
        <Box word="S" />
      </div>
      <p className="mb-6">
        La letra <span className="font-bold">G</span> está en la palabra y en la
        posición correcta.
      </p>
      <div className="flex mb-5 gap-x-4">
        <Box word="V" />
        <Box word="O" />
        <Box word="C" color="yellow" />
        <Box word="A" />
        <Box word="L" />
      </div>
      <p className="mb-5">
        La letra <span className="font-bold">C</span> está en la palabra pero en
        la posición incorrecta.
      </p>
      <div className="flex mb-5 gap-x-4">
        <Box word="C" />
        <Box word="A" />
        <Box word="N" />
        <Box word="T" />
        <Box word="O" color="gray" />
      </div>
      <p className="mb-9">
        La letra <span className="font-bold">O</span> no está en la palabra.
      </p>
      <p className="mb-8">
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>
      <p className="mb-8 text-center">¡Una palabra nueva cada 5 minutos!</p>

      <Button content="!JUGAR¡" className="max-w-[263px] mx-auto w-full" />
    </section>
  );
}
