import React from "react";
import useTheme from "../hooks/useTheme";
import ButtonAction from "./ButtonAction";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggled() {
  const [theme, changeTheme] = useTheme();

  return (
    <button
      title="Theme"
      type="button"
      onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <FaMoon /> : <FaSun className="sun" />}
    </button>
  );
}
