import React,
{
	PropTypes
}
from 'react'
import InfiniteCalendar,
{
	Calendar as cnd,
	defaultMultipleDateInterpolation,
	withMultipleDates
}
from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
class CalendarComponent extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.selected !== this.props.selected) {
			return nextProps.selected.slice(1).toString() !== this.props.selected.slice(1).toString()
		}
		return false;
	}
	render () {
		const {
			interpolateSelection,
			loc,
			selected
		} = this.props;
		return (
			<InfiniteCalendar Component={withMultipleDates(cnd)} className="CalendarElement" height={window.innerHeight - 247} interpolateSelection={interpolateSelection} locale={loc} selected={selected}/>
		)
	}
}
export
default CalendarComponent