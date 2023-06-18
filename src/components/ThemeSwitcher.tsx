import lightModeLogo from "../assets/light-mode.svg";
import darkModeLogo from "../assets/dark-mode.svg";
import { useState } from "react";
export const ThemeSwitcher = () => {
  const [isDarkMode, setisDarkMode] = useState(false);
  const handleThemeChange = () => {
    setisDarkMode(!isDarkMode);
  };
  return (
    <img
      src={isDarkMode ? lightModeLogo : darkModeLogo}
      alt={isDarkMode ? "Light Mode" : "Dark Mode"}
      onClick={handleThemeChange}
    />
  );
};
