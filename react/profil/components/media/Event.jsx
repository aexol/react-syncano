import React,
{
	PropTypes
}
from 'react'
import moment from 'moment';
import './Event.scss';
const Event = ({
	onClick,
	nazwa,
	data,
	akta,
	miejsce
}) => (
	<div className='Event' onClick={onClick}>
		<div className='EventDate'>{moment(data).format("YYYY-MM-DD HH:mm")}</div>
		<div className='EventName'>{nazwa}</div>
		<div className='EventAkta'>{akta ? akta.nazwa : ""}</div>
		<div className='EventKlient'>{akta ? akta.klient ? akta.klient.nazwa : "" : ""}</div>
		<div className='EventPlace'>{miejsce}</div>
	</div>
)
export
default Event