import React,
{
	PropTypes
}
from 'react'
import './Inviter.scss';
import FullButton from '../../../material/fullbutton.jsx';
const Inviter = ({
	nazwa,
	accept
}) => (
	<div className="Inviter">
		<span className="name">
			Otrzymałeś zaproszenie od
			<b>{nazwa}</b>
		</span>
		<FullButton label="Akceptuj" onClick={accept}/>
	</div>
)
export
default Inviter