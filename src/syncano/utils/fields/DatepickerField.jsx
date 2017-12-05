import React, {PropTypes} from 'react'
import classnames from 'classnames'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class DatepickerField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (date) {
    this.setState({
      startDate: date
    })
  }

  render () {
    const {name, className = '', invalid, t} = this.props
    return (
      <div
        className={classnames({
          'date-picker': true,
          [className]: true,
          invalid
        })}
        key={name}
      >
        <DatePicker
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
