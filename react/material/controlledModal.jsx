import React,
{
	PropTypes
}
from 'react'
import Modal from 'react-modal';
import ModalConfirm from './modalconfirm.jsx';
import './modal.scss';
const fieldElements = {
	text: ({
		name
	}, t) => (
		<input onChange={(e) => {
				t.setState({
					[name]: e.target.value
				})
			}} placeholder={name} type="text" value={t.state[name]}/>
	),
	textarea: ({
		name
	}, t) => (
		<textarea onChange={(e) => {
				t.setState({
					[name]: e
				})
			}} placeholder={name} value={t.state[name]}/>
	),
	select: ({
		name,
		label,
		value,
		values
	}, t) => (
		<Select name={name} onChange={(e) => {
				t.setState({
					[name]: e
				});
			}} options={values.map(k => ({
				value: k[value],
				label: k[label]
			}))} placeholder={name} value={t.state[name]}/>
	)
}
class ControlledModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	componentWillMount() {}
	render () {
		const {
			fields
		}
		return (
			<Modal className="contentModal" contentLabel={""} isOpen={isOpen} overlayClassName={this.state.destroy ? "overlayModal destroy" : "overlayModal"}>
				<div className='modalContent'>{fields.map(f => fieldElements[f.type]({
					...f
				}, this)}</div>
				<ModalConfirm accept={() => {
					this.close(accept)
				}} acceptT={acceptT} cancel={() => {
					this.close(cancel)
				}} cancelT={cancelT}/>
			</Modal>
		)
	}
}
export
default ControlledModal