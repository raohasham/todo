import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({ 
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
   return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider