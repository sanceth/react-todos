import React from 'react'
import ToDo from '../components/ToDo'

const TodoListing = ({ todos, toggleTodos }) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <ToDo key={todo.id}
                        {...todo}
                        onClick={() => toggleTodos(todo.id)} ></ToDo>
                )
            })}
        </ul>
    )
}

export default TodoListing