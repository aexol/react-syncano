import React, { PropTypes } from 'react'
import classnames from 'classnames'
const ClassicFileInput = (props = {}) => <input type="file" {...props} />
const FileField = ({
  name,
  placeholder,
  className = '',
  Component = ClassicFileInput,
  modifyField,
  fieldValue,
  changed,
  ...props
}) => (
    <div className='formgenFile' key={name}>
      <Component
        {...props}
        className={classnames({
          [className]: true,
          forgenInput: true,
          changed,
        })}
        onChange={e => {
          modifyField({
            name,
            value: e.target.files[0]
          })
        }}
        placeholder={placeholder || name}
        type='file'
      />
      <a
        className='file_holder'
        href={fieldValue instanceof File ? '' : fieldValue}
      >
        {fieldValue instanceof File ? '' : fieldValue}
      </a>
    </div>
  )
export default FileField
