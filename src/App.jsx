import React, { useEffect, useState } from "react"
import { TodoProvider } from "./contexts"
 


function App() {
  const [todos , setTodos] = useState([])
 const addTodo = (todo) =>{
  setTodos((oldTodos)=> [{id:Date.now , ...todo},...oldTodos])
 }

 const editTodo = (id , todo)=>{
 setTodos((oldTodos)=>oldTodos.map((itodo)=>{itodo.id===id ? todo : itodo}))
 }

 const deleteTodo = (id)=>{
  setTodos(prev => prev.filter(obj => obj.id !== id))
 }

 const toggleComplete = (id)=>{
setTodos((oldTodos)=>{oldTodos.map((todo)=>{
  if (todo.id === id) {
    return {...todo,completed:!todo.completed}
  }
  return todo
})})
 }

 useEffect(()=>{
  const storedtodo = JSON.parse(localStorage.getItem("todos"))
  setTodos(storedtodo)
 },[])

 useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
 },[todos])

  return (
   <TodoProvider value={{todos,addTodo,deleteTodo,editTodo,toggleComplete}}>
   <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
