import React from 'react'

const FilterLink = (props) => {
    return <button className="button" onClick={props.onClick} disabled={props.active}>{props.label}</button>
}

export default FilterLink