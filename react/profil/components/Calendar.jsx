import React,
{
	PropTypes
}
from 'react';
import moment from 'moment';
import './Calendar.scss';
import Event from './media/Event.jsx';
import DateTimePicker from '../../material/datetime.jsx';
import GeoInput from '../../material/geo.jsx';
import PModal from '../../material/modal.jsx';
import PButton from '../../material/button.jsx';
import CalendarComponent from './media/CalendarComponent.jsx';
const toLocalDate = (date) => {
	return `${date.getFullYear() }-${ 1 + date.getMonth() }-${date.getDate() } ${toLocalTime(date) }`
}
const toLocalTime = (date) => {
	return `${date.getHours() < 10 ? '0' : '' }${date.getHours() }:${date.getMinutes() }${date.getMinutes() < 10 ? '0' : '' }`
}
var today = new Date();
const loc = {
	locale: require('date-fns/locale/pl'),
	headerFormat: 'dddd, D MMM',
	weekdays: [
		"Pon", "Wto", "Śro", "Czw", "Pt", "Sob", "Nie"
	],
	blank: 'selekcja',
	todayLabel: {
		long: 'Dziś',
		short: 'Dziś.'
	}
}
class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nazwa: ""
		}
	}
	render() {
		const {
			terminy,
			openModal,
			actions
		} = this.props;
		const {
			modal,
			data,
			miejsce,
			nazwa,
			termin_id
		} = this.state;
		const dates = terminy.map(t => moment(t.data))
		const now = new Date()
		return (
			<div className='CalendarContainer'>
				<div className='Terminy'>
					<div className='main_bar'>
						<div className='title'>Terminy</div>
						<div className='add' onClick={() => {
					this.setState({
						modal    : true,
						data     : toLocalDate(now),
						miejsce  : "",
						nazwa    : "",
						termin_id: false
					})
				}}>dodaj termin +</div>
					</div>
					<div className='list'>
						{terminy.filter(e => moment(e.data) > new Date()).map(e => (
						<Event key={e.id} onClick={() => {
							this.setState({
								modal    : true,
								...e,
								data     : moment.utc(e.data),
								termin_id: e.id
							})
						}} {...e}/>
				))}
					</div>
				</div>
				<div className="Calendar">
					<div className='main_bar'>
						<div className='title'>Kalendarz</div>
					</div>
					<CalendarComponent interpolateSelection={(date, selected) => {
					this.setState({
						modal    : true,
						data     : toLocalDate(date),
						miejsce  : "",
						nazwa    : "",
						termin_id: false
					})
					return [...dates];
				}} loc={loc} selected={[
					now, ...dates
				]}/>
				</div>
				<PModal accept={() => {
					if (termin_id) {
						actions.updateModel({
							name    : "terminy",
							endpoint: `/rest/terminakt/update/${termin_id}/`,
							data    : {
								miejsce,
								nazwa,
								data
							}
						})
					} else {
						actions.addModel({
							name    : "terminy",
							endpoint: "/rest/terminakt/create/",
							data    : {
								miejsce,
								nazwa,
								data
							}
						})
					}
					this.setState({
						modal: false
					})
				}} acceptT={termin_id ? "Edytuj" : "Dodaj"} cancel={() => {
					this.setState({
						modal: false
					})
				}} cancelT="Anuluj" isOpen={modal}>
					<input onChange={(e) => {
					this.setState({
						nazwa: e.target.value
					})
				}} placeholder="nazwa" type="text" value={nazwa}/>
					<DateTimePicker onChange={(data) => {
					this.setState({
						data: data
					})
				}} placeholder="data" value={data}/>
					<GeoInput initialValue={miejsce} onChange={(miejsce) => {
					this.setState({
						miejsce: miejsce.label
					})
				}} onSuggestSelect={(miejsce) => {
					this.setState({
						miejsce: miejsce.label
					})
				}}/>
				</PModal>
			</div>
		)
	}
}
export
default Calendar;