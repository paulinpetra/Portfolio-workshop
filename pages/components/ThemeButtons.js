import React from "react";
import { useTheme } from "../contexts/ThemeContextFile";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

const ThemeButtonsComponent = () => {
  const { state, dispatch } = useTheme();

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const handleFontSizeChange = () => {
    const currentFontSize = state.userPreferences.fontSize;
    const newFontSize =
      currentFontSize === "text-base" ? "text-xl" : "text-base";
    dispatch({ type: "SET_FONT_SIZE", payload: newFontSize });
  };

  return (
    <>
      <button
        className="flex items-center justify-center w-12 h-12 bg-indigo-900 hover:bg-gray-800 focus:outline-none rounded-full shadow transition duration-300 ease-in-out"
        onClick={handleThemeToggle}
      >
        <FontAwesomeIcon icon={faSun} className="w-6 h-6 text-yellow-300" />
        <FontAwesomeIcon icon={faMoon} className="w-6 h-6 text-yellow-100" />
      </button>
      <button
        className="py-2 px-4 text-white bg-black hover:text-gray-400 font-bold rounded shadow transition-colors duration-300"
        onClick={handleFontSizeChange}
      >
        Change Font Size
      </button>
    </>
  );
};

export default ThemeButtonsComponent;
