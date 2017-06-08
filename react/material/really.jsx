import React,
{
	PropTypes
}
from 'react'
import PModal from './modal.jsx';
const Really = ({
	isOpen,
	accept,
	cancel,
	q
}) => (
	<PModal accept={accept} acceptT="Tak" cancel={cancel} cancelT="Nie" isOpen={isOpen}>
		<p>{q ? q : "Czy na pewno?"}</p>
	</PModal>
)
export
default Really