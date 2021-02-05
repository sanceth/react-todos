import { connect } from 'react-redux'
import FilterLink from '../components/FilterLink'
import React from 'react'
import {VisibilityFilters,setVisibilityFilter} from '../actions/index'

const mapStateToProps = (state,ownProps)=>({
    active : ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch,ownProp )=>({
    onClick : () =>dispatch(setVisibilityFilter(ownProp.filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(FilterLink)