import React, { PropTypes } from 'react'
import SelectField from './SelectField'
const RelationField = ({
  ...props
}) => (
    <SelectField
      multi={true}
      {...props}
    />
  )
export default RelationField
