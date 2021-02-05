import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'
import { VisibilityFilters } from '../actions/index'

import ToDoListing from '../components/TodoListing'

const getFilteredToDoList = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            return []
    }
}


const mapStateToProps = (state) => ({
    todos: getFilteredToDoList(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
    toggleTodos: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,
    mapDispatchToProps
)(ToDoListing)