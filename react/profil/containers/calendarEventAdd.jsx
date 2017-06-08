import {
	connect
}
from 'react-redux'
import CalendarEventAdd from '../components/CalendarEventAdd.jsx'
import {
	closeModal,
	fetchAddEvent,
	fetchDeleteEvent,
	deleteEvent
}
from '../actions';
import React,
{
	PropTypes
}
from 'react'
class CalendarEventAddContainer extends React.Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired,
		calendar: PropTypes.object.isRequired
	}
	cancel() {
		const {
			dispatch
		} = this.props;
		dispatch(closeModal);
	}
	accept(values) {
		const {
			dispatch
		} = this.props;
		const {
			start,
			end,
			place,
			title
		} = values;
		dispatch(closeModal);
		dispatch(fetchAddEvent(values));
	}
	deleteEvent(id) {
		const {
			dispatch
		} = this.props;
		dispatch(deleteEvent(id));
		fetchDeleteEvent(id);
		dispatch(closeModal);
	}
	render() {
		const {
			calendar
		} = this.props;
		return (
			<div>
				<CalendarEventAdd accept={(v) => {
					this.accept(v)
				}} cancel={() => {
					this.cancel()
				}} content={calendar.modalContent} deleteEvent={(id) => {
					this.deleteEvent(id)
				}} isOpen={calendar.modalOpen} label="Dodaj wydarzenie"/>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	calendar: state.calendar
})
export
default connect(mapStateToProps)(CalendarEventAddContainer);