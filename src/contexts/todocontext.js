import { useContext } from "react";
import { createContext } from "react";

export const todoContext = createContext({ })


export const useTodo = ()=>{
   return useContext(todoContext)
}

export const todoProvider = todoContext.Provider