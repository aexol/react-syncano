import React, { PropTypes } from 'react'
import MultiSelect from './components/MultiSelect'
import classnames from 'classnames'
const SelectField = ({
  name,
  placeholder,
  label = 'name',
  value = 'id',
  values,
  multi = false,
  className = '',
  Component = MultiSelect,
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
      multi={multi}
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
