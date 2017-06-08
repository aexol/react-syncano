import React,
{
	PropTypes
}
from 'react'
import {
	connect
}
from 'react-redux'
import Alert from '../../material/alert.jsx';
import './AlertContainer.scss';
class AlertContainer extends React.Component {
	render () {
		const {
			alerts
		} = this.props;
		return (
			<div className="Alerts">
				{alerts.map(a => (
						<Alert key={a.id} {...a}/>
				))}
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	alerts: state.alerts.alerts
})
export
default connect(mapStateToProps)(AlertContainer);