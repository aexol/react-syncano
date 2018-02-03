import React, { PropTypes } from 'react'
import classnames from 'classnames'
import TextField from "./TextField"
const NumberField = ({...props}) => <TextField inputType="number" {...props} />
export default NumberField