import React, { PropTypes } from 'react'

const SubmitComponent = (props = {submitText}) =>
    <input
        className='Submit'
        type="submit"
        value={submitText}
    />
export default SubmitComponent
