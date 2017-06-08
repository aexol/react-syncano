import React,
{
	PropTypes
}
from 'react'
import MenuProfil from '../menu.jsx';
import AlertContainer from '../containers/AlertContainer.jsx';
import './BaseApp.scss';
class BaseApp extends React.Component {
	render () {
		const {
			children
		} = this.props;
		return (
			<div className="BaseApp">
				<MenuProfil />
				<div className="BaseAppContent">
					{children}
				</div>
				<AlertContainer />
			</div>
		)
	}
}
export
default BaseApp;