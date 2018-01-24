import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Autosuggest from './Autosuggest'
const AutosuggestField = ({
  name,
  placeholder,
  load,
  list,
  className = '',
  Component,
  t
}) => (
    <Autosuggest
      initialValue={t.state.fields[name]}
      load={load}
      name={name}
      placeholder={placeholder}
      list={list}
      Component={Component}
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
export default AutosuggestField
