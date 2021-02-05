import React from 'react'
import Aux from '../hoc/Aux'
import { addTodo } from '../actions/index'
import { connect } from 'react-redux'



const AddToDo = ({ dispatch }) => {
    let inputValue;
    const addToDoList = () => {
        console.log(inputValue.value)
        if (!inputValue.value) {
            return
        }
        dispatch(addTodo(inputValue.value))
        inputValue.value = ''
    }
    return (
        <Aux>
            <input type="text" placeholder="Enter to do" ref={inp => inputValue = inp} onKeyDown={e => e.which == 13 && addToDoList()} />
        </Aux>
    )
}


export default connect()(AddToDo)