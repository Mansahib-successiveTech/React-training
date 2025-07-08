"use client"

import { createContext, useCallback, useContext, useState } from "react";
const MyAuthContext=createContext();

export const AuthContextProvider=({children})=>{
const username="mansahib";
const password=123;
const [loggedIn,setLoggedin]=useState(false);
const login=((name,pass)=>{
    if(name=== username && parseInt(pass)===password){
        setLoggedin(true);
    }

})
return(
    <MyAuthContext.Provider value={{loggedIn,login}} >
        {children}
    </MyAuthContext.Provider>
    
)

}

export const useAuth=()=>useContext(MyAuthContext);

