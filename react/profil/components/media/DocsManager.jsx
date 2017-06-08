import Dropzone from 'react-dropzone'
import React,
{
	PropTypes
}
from 'react'
import SingleFile from './SingleFile.jsx'
import SingleTermin from './SingleTermin.jsx'
import SingleFileDropped from './SingleFileDropped.jsx'
import Button from '../../../material/button.jsx';
import PModal from '../../../material/modal.jsx';
import DateTimePicker from '../../../material/datetime.jsx';
import GeoInput from '../../../material/geo.jsx';
import './DocsManager.scss';
import moment from 'moment';
class DocsManager extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		}
	}
	openModal = (params = {
		miejsce: "",
		data: "",
		termin_id: ""
	}) => {
		console.log(params);
		this.setState({
			modal: true,
			...params
		})
	}
	closeModal = () => {
		this.setState({
			modal: false
		})
	}
	onChange = (name, value) => {
		this.setState({
			[name]: value
		})
	}
	render () {
		const {
			files,
			terminy,
			dropped_files,
			actions,
			akta,
			onDelete,
			onDrop
		} = this.props;
		const {
			modal,
			miejsce,
			data,
			nazwa,
			termin_id
		} = this.state;
		return (
			<div className="DocsManager">
				<div className="TerminyMenu">
					<PModal accept={() => {
					if (termin_id) {
						actions.updateModel({
							name    : "terminy",
							endpoint: `/rest/terminakt/update/${termin_id}/`,
							reducer : "akta_terminy",
							data    : {
								miejsce,
								nazwa,
								data,
								akta
							}
						})
					} else {
						actions.addModel({
							name    : "terminy",
							endpoint: "/rest/terminakt/create/",
							reducer : "akta_terminy",
							data    : {
								miejsce,
								nazwa,
								data,
								akta
							}
						})
					}
					this.closeModal()
				}} acceptT={termin_id ? "Edytuj" : "Dodaj"} cancel={this.closeModal} cancelT="Anuluj" isOpen={modal}>
						<input onChange={(e) => {
					this.onChange("nazwa", e.target.value)
				}} placeholder="nazwa" type="text" value={nazwa}/>
						<DateTimePicker onChange={(data) => {
					this.onChange("data", data)
				}} placeholder="data" value={data}/>
						<GeoInput initialValue={miejsce} onChange={(miejsce) => {
					this.onChange("miejsce", miejsce.label)
				}} onSuggestSelect={(miejsce) => {
					this.onChange("miejsce", miejsce.label)
				}}/>
					</PModal>
					<Button label="dodaj termin" onClick={this.openModal}/>
				</div>
				<div className="Terminy">
					{terminy.map(t => (
						<SingleTermin deleteTermin={(id) => {
							actions.deleteModel({
								name    : "terminy",
								endpoint: `/rest/terminakt/delete/${id}/`,
								reducer : "akta_terminy",
								id
							})
						}} editTermin={(id) => {
							this.openModal({
								...t,
								data     : moment.utc(t.data),
								termin_id: id
							})
						}} key={t.id} {...t}/>
				))}
				</div>
				<div className="Drop">
					<Dropzone className="DropBox" onDrop={onDrop}>
						<div className="DropDescription">
							Tu upuść pliki akt, abyś mógł dzielić się nimi z innymi członkami twojej kancelari
						</div>
					</Dropzone>
				</div>
				<div className="FileList">
					{files.map(f => (
						<SingleFile key={f.id} onDelete={onDelete} onDownload={(path, nazwa) => {
							actions.downloadFile(path, nazwa)
						}} {...f}/>
				))}
				</div>
			</div>
		)
	}
}
export
default DocsManager