import { useRef } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext()
export const AuthContextProvider=({children})=>{

const [isAuth, setisAuth] = useState(false)

const toggleAuth=()=>{
  setisAuth(!isAuth)
}

var TOKEN=useRef(0)

    return <AuthContext.Provider value={{isAuth,toggleAuth,TOKEN}}>{children}</AuthContext.Provider>
}