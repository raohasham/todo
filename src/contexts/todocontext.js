import { useContext } from "react";
import { createContext } from "react";

export const todoContext = createContext({ 
    todos : [
        {
            id:1,
            todo : "msg" ,
            completed : false,
        },
    ],
    addTodo : (todo)=>{},
    deleteTodo : (id , todo)=>{},
    editTodo : (id)=>{},
    toggleComplete : (id)=>{}
})


export const useTodo = ()=>{
   return useContext(todoContext)
}

export const todoProvider = todoContext.Provider