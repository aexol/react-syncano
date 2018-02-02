import React, { PropTypes } from 'react'
import classnames from 'classnames'
const TextareaField = ({
  name,
  placeholder,
  className = '',
  Component = (props) => <textarea {...props} />,
  t,
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
          changed: t.state.fields[name] !== t.state.initial[name],
        })}
        onChange={e => {
          t.setState({
            fields: {
              ...t.state.fields,
              [name]: e.target.value
            }
          })
        }}
        placeholder={placeholder || name}
        value={t.state.fields[name]}
      />
    </div>
  )
export default TextareaField
