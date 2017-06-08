import React,
{
	PropTypes
}
from 'react'
import {
	Router,
	Route,
	Link
}
from 'react-router'
import './menu.scss';
import IconLaw from '../images/ikony/icon.jsx';
import {
	connect
}
from 'react-redux';
class MenuProfil extends React.Component {
	render () {
		const {
			routing
		} = this.props;
		console.log(routing);
		return (
			<div className="MenuProfil">
				<Link className={routing == '/organizacja/' ? 'active' : "nonactive"} to='/organizacja/'><IconLaw name="profil_m"/></Link>
				<Link className={routing == '/wspolpraca/' ? 'active' : "nonactive"} to={'/wspolpraca/'}><IconLaw name="mail"/></Link>
				<Link className={routing == '/kalendarz/' ? 'active' : "nonactive"} to={'/kalendarz/'}><IconLaw name="kalendarz"/></Link>
				<Link className={routing == '/pliki/' ? 'active' : "nonactive"} to={'/pliki/'}><IconLaw name="akta"/></Link>
				<Link className={routing == '/legal/' ? 'active' : "nonactive"} to={'/legal/'}><IconLaw name="legalenglish"/></Link>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	routing: state.routing.locationBeforeTransitions.pathname
})
export
default connect(mapStateToProps)(MenuProfil);