import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Datetime from 'react-datetime'
import moment from 'moment'
import './DatetimeField.scss'
class DatetimeField extends React.Component {
  render() {
    const {
      name,
      className = '',
      placeholder,
      Component = Datetime,
      modifyField,
      fieldValue,
      changed,
      ...props
    } = this.props
    return (
      <Component
        {...props}
        className={classnames({
          changed
        })}
        inputProps={{ placeholder: placeholder ? placeholder : name }}
        key={name}
        onChange={e => {
          modifyField({
            name,
            value: e
          })
        }}
        value={fieldValue} />
    )
  }
}

export default DatetimeField