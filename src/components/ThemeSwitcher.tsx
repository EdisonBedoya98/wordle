import lightModeLogo from "../assets/light-mode.svg";
import darkModeLogo from "../assets/dark-mode.svg";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    isLightMode
      ? document.body.classList.remove("dark")
      : document.body.classList.toggle("dark");
  }, [isLightMode]);

  const handleThemeChange = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <img
      src={isLightMode ? lightModeLogo : darkModeLogo}
      alt={isLightMode ? "Light Mode" : "Dark Mode"}
      onClick={handleThemeChange}
      className="cursor-pointer"
    />
  );
}
