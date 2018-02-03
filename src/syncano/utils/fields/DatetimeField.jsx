import React, { PropTypes } from 'react'
import classnames from 'classnames'
import Datetime from 'react-datetime'
import moment from 'moment'
import './DatetimeField.scss'
class DatetimeField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

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
        //className={`formgenInput ${t.state.fields[name] !== t.state.initial[name] ? "changed" : "" }`}
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