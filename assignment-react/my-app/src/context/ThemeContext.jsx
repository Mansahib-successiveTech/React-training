"use client";

import { useContext, useState } from "react";
import { createContext } from "react";
const Mycontext = createContext();

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const Toggler=()=>{
    setTheme((prev)=>prev==="light"?"dark":"light")
  }

  return(
    <>
    <Mycontext.Provider value={{theme,setTheme,Toggler}}>
        {children}
    </Mycontext.Provider>
    </>
  )
};

export const useTheme=()=>useContext(Mycontext);
