import React, { PropTypes } from 'react'
import classnames from 'classnames'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class DatepickerField extends React.Component {
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
      Component = DatePicker,
      t
    } = this.props
    return (
      <div
        className={classnames({
          'date-picker': true,
          [className]: true,
        })}
        key={name}
      >
        <Component
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={5}
          dateFormat='LLL'
        />
      </div>
    )
  }
}
export default DatepickerField
