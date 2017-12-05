import React, {PropTypes} from 'react'
import classnames from 'classnames'
import TextField from './TextField'
const GeoField = ({
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
      type={'text'}
      disabled
      value={t.state.fields[name]}
    />
  </div>
)
export default GeoField
