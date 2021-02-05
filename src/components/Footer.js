import React from 'react'
import FooterFilter from '../containers/FooterFilter'
import {VisibilityFilters,setVisibilityFilter} from '../actions/index'

const Footer = () => {
    return (<div>
        <FooterFilter label="All" filter={VisibilityFilters.SHOW_ALL} />
        <FooterFilter label="Active" filter={VisibilityFilters.SHOW_ACTIVE} />
        <FooterFilter label="completed" filter={VisibilityFilters.SHOW_COMPLETED} />
    </div>
    )
}

export default Footer