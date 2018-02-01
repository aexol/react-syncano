import React, { PropTypes } from 'react'
import Select from 'react-select'
import classnames from 'classnames'
const SelectField = ({
  name,
  placeholder,
  label = 'id',
  value = 'id',
  values,
  multi,
  className = '',
  Component = Select,
  t,
  ...props
}) => (
    <Component
      {...props}
      className={classnames({
        forgenInput: true,
        changed: t.state.fields[name] !== t.state.initial[name],
        [className]: true,
      })}
      key={name}
      multi={multi || false}
      name={placeholder || name}
      onChange={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e
          }
        })
      }}
      options={values.map(k => ({
        key: `${name}-${k[value]}`,
        value: k[value],
        label: k[label]
      }))}
      placeholder={placeholder || name}
      value={t.state.fields[name]}
    />
  )
export default SelectField
