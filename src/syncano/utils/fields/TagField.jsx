import React, { PropTypes } from 'react'
import { Creatable } from 'react-select'
import classnames from 'classnames'

const TagField = ({
  name,
  placeholder,
  multi,
  className = '',
  Component = Creatable,
  t
}) => (
    <Component
      className={classnames({
        forgenInput: true,
        changed: t.state.fields[name] !== t.state.initial[name],
        [className]: true,
      })}
      key={name}
      multi={multi || true}
      name={placeholder || name}
      onChange={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        })
      }}
      placeholder={placeholder || name}
      value={t.state.fields[name]}
    />
  )
export default TagField
