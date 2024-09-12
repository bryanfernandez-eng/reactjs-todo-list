import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import TodoCard from "./components/TodoCard"
import { useState, useEffect } from "react"

function App() {

  const [todos, setTodos] = useState([]); 
  const [todoValue, setTodoValue] = useState(''); 

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]; 
    persistData(newTodoList)
    setTodos(newTodoList); 
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index; 
    })
    persistData(newTodoList)
    setTodos(newTodoList); 
  }

  function handleEditTodo(index){
    const valueToBeTobEdited = todos[index]; 
    setTodoValue(valueToBeTobEdited); 
    handleDeleteTodos(index); 
  }

  useEffect(()=>{
    if(!localStorage)
      return
    
    let localTodos = localStorage.getItem('todos'); 
    
    if(!localTodos)
      return
    
    localTodos = JSON.parse(localTodos).todos; 
    setTodos(localTodos); 
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList  handleEditTodo={handleEditTodo} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </>
  )
}

export default App
