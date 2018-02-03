import React, { PropTypes } from 'react'
import classnames from 'classnames'
const ClassicInput = (props = {}) => <input type="text" {...props} />
class TextField extends React.Component {
  render() {
    const {
      name,
      placeholder,
      inputType,
      modifyField,
      fieldValue,
      changed,
      className = '',
      Component = ClassicInput,
      ...props
    } = this.props
    return (
      <div
        className={classnames({
          formgenInput: true,
          [className]: true
        })}
      >
        <Component
          {...props}
          className={classnames({
            changed
          })}
          onChange={e => {
            modifyField({
              name,
              value: e.target.value
            })
          }}
          placeholder={placeholder || name}
          name={name}
          type={inputType || 'text'}
          value={fieldValue}
        />
      </div>
    )
  }
}
export default TextField