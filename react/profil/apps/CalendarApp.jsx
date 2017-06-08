import React,
{
	PropTypes
}
from 'react';
import CalendarList from '../containers/calendar.jsx';
import CalendarEventAddContainer from '../containers/calendarEventAdd.jsx';
export
default class CalendarApp extends React.Component {
constructor(props) {
	super(props);
}
render() {
	return (
		<CalendarList />
	);
}
}