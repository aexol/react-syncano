import React,
{
	PropTypes
}
from 'react';
import SingleDoc from './media/SingleDoc.jsx';
import Button from '../../material/button.jsx';
import PModal from '../../material/modal.jsx';
import './Docs.scss';
import SingleKlient from './media/SingleKlient.jsx';
import Select from 'react-select';
class Docs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nazwa: "",
			sygnatura: "",
			modal: false,
			klienci_modal: false,
			active_klient: null
		}
	}
	openModal = (params = {}) => {
		this.setState({
			modal: true
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
			active,
			docs,
			klienci,
			actions,
			docsManagerProps,
			onDocsExpand
		} = this.props;
		const {
			nazwa,
			nazwa_klienta,
			sygnatura,
			klient,
			klienci_modal,
			active_klient,
			modal
		} = this.state;
		const docsContent = docs.filter(d => active_klient ? d.klient == active_klient : true).map(d => active ? active === d.id ? (
			<SingleDoc active={active} docsManagerProps={docsManagerProps} key={d.id} onClick={onDocsExpand} {...d}/>
		) : [] : (
			<SingleDoc active={active} docsManagerProps={docsManagerProps} key={d.id} onClick={onDocsExpand} {...d}/>
		));
		const klienciContent = klienci.map(k => (
			<SingleKlient active={active_klient == k.id} key={k.id} onClick= {() => {
					this.setState({
						active_klient: k.id
					});
				}} {...k}/>
		))
		return (
			<div className='DocsContainer'>
				<div className="Klienci">
					<div className='main_bar'>
						<div className='title'>Klienci</div>
						<div className='add' onClick={() => {
					this.setState({
						klienci_modal: true
					})
				}}>dodaj klienta +</div>
					</div>
					<div className='list'>
						<SingleKlient active={active_klient == null} ilosc_akt={docs.map(d => !d.klient).length + klienci.map(k => k.ilosc_akt ? k.ilosc_akt : 0).reduce((a, b) => a + b, 0)} key={-232} nazwa="Wszyscy" onClick={() => {
					this.setState({
						active_klient: null
					});
				}}/>
							{klienciContent}
					</div>
				</div>
				<div className="Docs">
					<div className='Title'>
						<div className='title'>Akta elektroniczne</div>
						<div className='add' onClick={() => {
					this.setState({
						modal: true
					})
				}}>dodaj akta +</div>
					</div>
					<div className='DocsContent'>
						{docsContent}
					</div>
				</div>
				<PModal accept={() => {
					actions.addModel({
						name    : "akta",
						endpoint: "/rest/akta/create/",
						data    : {
							nazwa,
							sygnatura,
							klient: klient.value
						}
					})
					this.setState({
						modal: false
					})
				}} acceptT="Dodaj akta" cancel={() => {
					this.setState({
						modal: false
					})
				}} cancelT="Anuluj" contentLabel="Dodaj akta" isOpen={modal}>
					<Select name="Klient" onChange={(e) => {
					console.log(e)
					this.setState({
						klient: e
					});
				}} options={klienci.map(k => ({
					value: k.id,
					label: k.nazwa
				}))} placeholder="Klient.." value={klient}/>
					<input onChange={(e) => {
					this.onChange("nazwa", e.target.value)
				}} placeholder="nazwa" type="text" value={nazwa}/>
					<input onChange={(e) => {
					this.onChange("sygnatura", e.target.value)
				}} placeholder="sygnatura" type="text" value={sygnatura}/>
				</PModal>
				<PModal accept={() => {
					actions.addModel({
						name    : "klienci",
						endpoint: "/rest/klienci/create/",
						data    : {
							nazwa: nazwa_klienta
						}
					})
				}} acceptT="Dodaj klienta" cancel={() => {
					this.setState({
						klienci_modal: false
					})
				}} cancelT="Anuluj" contentLabel="Dodaj klienta" isOpen={klienci_modal}>
					<input onChange={(e) => {
					this.onChange("nazwa_klienta", e.target.value)
				}} placeholder="nazwa" type="text" value={nazwa_klienta}/>
				</PModal>
			</div>
		)
	}
}
export
default Docs