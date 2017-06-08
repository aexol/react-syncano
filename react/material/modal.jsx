import React,
{
	PropTypes
}
from 'react'
import Modal from 'react-modal';
import ModalConfirm from './modalconfirm.jsx';
import './modal.scss';
class PModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			destroy: false
		}
	}
	close = callback => {
		this.setState({
			destroy: true
		})
		setTimeout(() => {
			callback()
		}, 500)
		setTimeout(() => {
			this.setState({
				destroy: false
			})
		}, 600)
	}
	render () {
		const {
			children,
			isOpen,
			accept,
			cancel,
			acceptT,
			cancelT
		} = this.props
		return (
			<Modal className="contentModal" contentLabel={""} isOpen={isOpen} overlayClassName={this.state.destroy ? "overlayModal destroy" : "overlayModal"}>
				<div className='modalContent'>{children}</div>
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
default PModal;