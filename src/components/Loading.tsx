import { PacmanLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="w-screen h-screen grid items-center justify-center">
      <PacmanLoader color="#36d7b7" />
    </div>
  );
}
