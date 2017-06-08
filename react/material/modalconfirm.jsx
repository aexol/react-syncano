import React,
{
	PropTypes
}
from 'react'
import './modalconfirm.scss';
const ModalConfirm = ({
	acceptT,
	cancelT,
	accept,
	cancel
}) => (
	<div className="ModalConfirm">
		<div className='cancel' onClick={cancel}>{cancelT}</div>
		<div className='accept' onClick={accept}>{acceptT}</div>
	</div>
)
export
default ModalConfirm