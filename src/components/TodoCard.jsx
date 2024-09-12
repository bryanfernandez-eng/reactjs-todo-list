import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodos, index, handleEditTodo} = props; 
  return (
    <li className="todoItem">
        {children}
        <div className='actionsContainer'>
            <button onClick={()=> {
                handleEditTodo(index); 
            }}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <button onClick={() => {
                handleDeleteTodos(index)}}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    </li>
    )
}
