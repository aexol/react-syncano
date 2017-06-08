import React,
{
	PropTypes
}
from 'react'
import DateTimePicker from '../../material/datetime.jsx';
import GeoInput from '../../material/geo.jsx';
import PModal from '../../material/modal.jsx';
import PButton from '../../material/button.jsx';
class CalendarEventAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			start: nextProps.content.start,
			id: nextProps.content.id,
			typ: nextProps.content.typ,
			name: nextProps.content.title,
			place: nextProps.content.place,
			end: nextProps.content.end
		})
	}
	changeDate(name, date) {
		this.setState({
			...this.state,
			[name]: date
		})
	}
	changeName(name) {
		this.setState({
			...this.state,
			name: name
		})
	}
	changePlace(place) {
		this.setState({
			...this.state,
			place: place
		})
	}
	render() {
		const {
			isOpen,
			cancel,
			content,
			accept,
			deleteEvent
		} = this.props;
		let dodajButton;
		let addValues = {
			start: this.state.start,
			end: this.state.end,
			title: this.state.name,
			place: this.state.place
		}
		let label;
		let usunButton;
		if (this.state.id) {
			label = "Zmień wydarzenie"
			usunButton = (
					<PButton label="Usuń" onClick={() => {
						deleteEvent(this.state.id)
					}}/>
			)
			dodajButton = null;
		} else {
			label = "Dodaj wydarzenie"
			dodajButton = (
					<PButton label={label} onClick={() => {
						accept(addValues)
					}}/>
			)
		}
		return (
			<PModal contentLabel={label} isOpen={isOpen}>
				<h4>{label}</h4>
				<input onChange={(e) => {
					this.changeName(e.target.value)
				}} placeholder="Nazwa" type="text" value={this.state.name}/>
				<DateTimePicker onChange={(date) => {
					this.changeDate("start", date)
				}} value={this.state.start}/>
				<DateTimePicker onChange={(date) => {
					this.changeDate("end", date)
				}} value={this.state.end}/>
				<GeoInput initialValue={this.state.place} onChange={(place) => {
					this.changePlace(place)
				}} onSuggestSelect={(place) => {
					this.changePlace(place.label)
				}}/>
					{dodajButton}
						{usunButton}
				<PButton label={"Anuluj"} onClick={() => {
					cancel()
				}}/>
			</PModal>
		)
	}
}
export
default CalendarEventAdd;