"use client"

import { createContext, useContext, useState } from "react";
const LanguageSwitcherContext=createContext();


export const LanguageSwitcherProvider=({children})=>{
const [language,setLanguage]=useState("eng");
const Toggler=()=>setLanguage((prev)=>prev==="eng"?"sp":"eng")


return(
<LanguageSwitcherContext.Provider value={{ language, setLanguage,Toggler }}>
    {children}
</LanguageSwitcherContext.Provider>
)
}

export const useLanguage=()=>useContext(LanguageSwitcherContext)