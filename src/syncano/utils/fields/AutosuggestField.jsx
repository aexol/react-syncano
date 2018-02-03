import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Autosuggest from './Autosuggest'
const AutosuggestField = ({
  name,
  placeholder,
  load,
  list,
  className = '',
  Component = Autosuggest,
  modifyField,
  fieldValue,
  changed,
  ...props
}) => (
    <Component
      {...props}
      initialValue={fieldValue}
      load={load}
      name={name}
      placeholder={placeholder}
      list={list}
      onSelect={e => {
        modifyField({
          name,
          value: e
        })
      }}
    />
  )
export default AutosuggestField
