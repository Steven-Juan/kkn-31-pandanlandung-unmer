import React, { type Dispatch, type SetStateAction } from "react";
import assets from "../assets";

type ThemeToggleBtnProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const ThemeToggleBtn: React.FC<ThemeToggleBtnProps> = ({ theme, setTheme }) => {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt="Toggle theme"
        className="size-8.5 p-1.5 border border-gray-500 rounded-full"
      />
    </button>
  );
};

export default ThemeToggleBtn;
