import React,
{
	PropTypes
}
from 'react';
import './fullbutton.scss';
const FullButton = ({
	label,
	onClick
}) => (
	<div className="FullButton" onClick={onClick}>{label}</div>
)
export
default FullButton