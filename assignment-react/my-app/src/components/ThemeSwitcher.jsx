"use client";
import { useTheme } from "@/context/ThemeContext";
const ThemeSwitcher = () => {
  const { theme, Toggler } = useTheme();
  document.body.className = theme;
  return (
    <>
      <div>
        <header>
          <button onClick={Toggler}>{theme}</button>
          <p></p>
        </header>
      </div>
    </>
  );
};
export default ThemeSwitcher;
