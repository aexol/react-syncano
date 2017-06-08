import React,
{
	PropTypes
}
from 'react';
import FullButton from './fullbutton.jsx';
import "./alert.scss";
class Alert extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		}
	}
	render () {
		const {
			visible
		} = this.state;
		const {
			text,
			id
		} = this.props;
		return (
			<div className={`Alert anim-alert-${id + 1 }`}>
				<div className='Text'>
					{text}
				</div>
			</div>
		)
	}
}
export
default Alert