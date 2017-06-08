import React,
{
	PropTypes
}
from 'react'
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import './datetime.scss';
class DateTimePicker extends React.Component {
	render () {
		const ip = {
			placeholder: this.props.placeholder
		}
		return (
			<div className="DateTimePicker">
				<Datetime inputProps={ip} timeFormat={"HH:mm"} utc={true} {...this.props}/>
			</div>
		)
	}
}
export
default DateTimePicker;