import React from 'react'

const ToDo = (props) => {
    return (
        <li
            key={props.id}
            onClick={props.onClick}
            style={{ background: props.completed ? 'gray' : '#f3f2f2' }}
        >
            {props.text}
        </li>
    )
}

export default ToDo