import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props; 

  return (
    <ul className='main'>
        {todos.map((todo, todoIndex) => (
            <TodoCard {...props} index={todoIndex} key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
        ))}
    </ul>
  )
}
