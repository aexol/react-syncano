import React, { PropTypes } from 'react'
import classnames from 'classnames'
const FileField = ({
  name,
  placeholder,
  className = '',
  Component = (props) => <input type="file" {...props} />,
  t,
  ...props
}) => (
    <div className='formgenFile' key={name}>
      <Component
        {...props}
        className={classnames({
          [className]: true,
          forgenInput: true,
          changed: t.state.fields[name] !== t.state.initial[name],
        })}
        onChange={e => {
          t.setState({
            fields: {
              ...t.state.fields,
              [name]: e.target.files[0]
            }
          })
        }}
        placeholder={placeholder || name}
        type='file'
      />
      <a
        className='file_holder'
        href={
          t.state.fields[name] !== t.state.initial[name]
            ? ''
            : t.state.initial[name] ? t.state.initial[name] : ''
        }
      >
        {t.state.fields[name] !== t.state.initial[name]
          ? ''
          : t.state.initial[name] ? t.state.initial[name] : ''}
      </a>
    </div>
  )
export default FileField
