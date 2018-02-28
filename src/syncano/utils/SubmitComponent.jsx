import React, { PropTypes } from 'react'

const SubmitComponent = ({submitText}) =>
    <input
        className='Submit'
        type="submit"
        value={submitText}
    />
export default SubmitComponent
