import React,
{
	PropTypes
}
from 'react'
import './SingleKlient.scss';
const SingleKlient = ({
	nazwa,
	active,
	ilosc_akt,
	onClick
}) => (
	<div className={active ? "SingleKlient active" : "SingleKlient"} onClick={onClick}>
		<div className='nazwa'>{nazwa}</div>
		<div className='count'>{ilosc_akt ? ilosc_akt : 0}</div>
	</div>
)
export
default SingleKlient