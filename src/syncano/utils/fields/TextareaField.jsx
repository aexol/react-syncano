import React, { PropTypes } from 'react'
import classnames from 'classnames'
const ClassicTextarea = (props = {}) => <textarea {...props} />
const TextareaField = ({
  name,
  placeholder,
  className = '',
  modifyField,
  fieldValue,
  changed,
  Component = ClassicTextarea,
  ...props
}) => (
    <div
      className={classnames({
        formgenInput: true,
        [className]: true
      })}
      key={name}
    >
      <Component
        {...props}
        className={classnames({
          changed,
        })}
        onChange={e => {
          modifyField({
            name,
            value: e.target.value
          })
        }}
        placeholder={placeholder || name}
        value={fieldValue}
      />
    </div>
  )
export default TextareaField
