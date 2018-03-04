import React, { PropTypes } from 'react'
import { Creatable } from 'react-select'
import Tag from './components/Tag'
import classnames from 'classnames'

const TagField = ({
  name,
  placeholder,
  multi,
  modifyField,
  fieldValue,
  changed,
  className = '',
  Component = Tag,
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
      multi={multi || true}
      name={placeholder || name}
      onChange={e => {
        modifyField({
          name,
          value: e
        })
      }}
      placeholder={placeholder || name}
      value={fieldValue}
    />
  )
export default TagField
