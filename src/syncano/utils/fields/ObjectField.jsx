import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { JsonEditor } from 'react-json-edit'
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
        <JsonEditor value={fieldValue} propagateChanges={(e)=>{
          modifyField({
            name,
            value:e
          })
        }}/>
    </div>
  )
export default TextareaField
