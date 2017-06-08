import React,
{
	PropTypes
}
from 'react'
import {
	connect
}
from 'react-redux'
import {
	bindActionCreators
}
from 'redux';
import * as actions from '../actions';
import Organizacja from '../components/Organizacja.jsx';
import {
	getUsersOrganisation,
	getInvites,
	inviteUser,
	isPremium
}
from '../actions';
class OrganizacjaContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: ""
		}
	}
	componentWillMount() {
		const {
			actions
		} = this.props;
	}
	componentDidMount() {
		const {
			actions
		} = this.props;
		actions.getUsersOrganisation()
		actions.getInvites()
		actions.getProfile()
	}
	changeState(st) {
		this.setState(st)
	}
	render () {
		return (
			<Organizacja changeState={(st) => {
					this.changeState(st)
				}} {...this.props}/>
		)
	}
}
const mapStateToProps = (state) => ({
	users: state.organizacja.users,
	invites: state.organizacja.invites,
	profile: state.auth.profile ? state.auth.profile : {}
})
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(OrganizacjaContainer);