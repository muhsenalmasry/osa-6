import React from 'react'
import { connect } from 'react-redux'
import {filterChange} from '../reducers/filterReducer'

const Filter = (props) => {
    const handleChange = (event) => {
        event.preventDefault()
        const filter = event.target.value
        props.filterChange(filter)
    }

    return (
        <div>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default connect(
    null,
    {filterChange}
)(Filter)