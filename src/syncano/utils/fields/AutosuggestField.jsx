import React, {PropTypes} from 'react'
import classnames from 'classnames'
import Autosuggest from './Autosuggest'
const GeoField = ({
  name,
  placeholder,
  location,
  radius,
  className = '',
  invalid,
  t
}) => (
  <Autosuggest
    initialValue={t.state.fields[name]}
    load={load}
    name={name}
    list={list}
    onSelect={e => {
      t.setState({
        fields: {
          ...t.state.fields,
          [name]: e
        }
      })
    }}
  />
)
export default GeoField
