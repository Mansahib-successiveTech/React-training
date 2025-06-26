"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";
const ThemeSwitcher = () => {
  const { theme, Toggler } = useTheme();
  useEffect(()=>{
    document.body.className = theme;
  },[theme])
 
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
