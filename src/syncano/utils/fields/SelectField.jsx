import React, { PropTypes } from 'react'
import Select from 'react-select'
import classnames from 'classnames'
const SelectField = ({
  name,
  placeholder,
  label = 'name',
  value = 'id',
  values,
  multi,
  className = '',
  Component = Select,
  modifyField,
  fieldValue,
  changed,
  ...props
}) => (
    <Component
      {...props}
      className={classnames({
        forgenInput: true,
        changed,
        [className]: true,
      })}
      key={name}
      multi={multi || false}
      name={placeholder || name}
      onChange={e => {
        modifyField({
          name,
          value: e
        })
      }}
      options={values.map(k => ({
        key: `${name}-${k[value]}`,
        value: k[value] ,
        label: k[label] || k[value]
      }))}
      placeholder={placeholder || name}
      value={fieldValue}
    />
  )
export default SelectField
