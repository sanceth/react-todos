import React from 'react'

const ToDo = (props) => {
    return (
        <li
            key={props.id}
            onClick={props.onClick}
            style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
        >
            {props.text}
        </li>
    )
}

export default ToDo