import React, {PropTypes} from 'react'
import classnames from 'classnames'
const TextField = ({
  name,
  placeholder,
  inputType,
  className = '',
  invalid,
  t
}) => (
  <div
    className={classnames({
      formgenInput: true,
      [className]: true
    })}
    key={name}
  >
    <input
      className={classnames({
        changed: t.state.fields[name] !== t.state.initial[name],
        invalid
      })}
      key={name}
      onChange={e => {
        t.setState({
          fields: {
            ...t.state.fields,
            [name]: e.target.value
          }
        })
      }}
      placeholder={placeholder || name}
      type={inputType || 'text'}
      value={t.state.fields[name]}
    />
  </div>
)
export default TextField