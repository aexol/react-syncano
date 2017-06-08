import React,
{
	PropTypes
}
from 'react'
import {
	connect
}
from 'react-redux'
import OrganizacjaWaiter from '../components/OrganizacjaWaiter.jsx';
import {
	getInviters,
	acceptInviter
}
from '../actions/organizacja.jsx';
import {
	bindActionCreators
}
from 'redux';
import * as actions from '../actions';
class OrganizacjaWaiterContainer extends React.Component {
	componentWillMount() {
		const {
			getInviters
		} = this.props.actions;
		getInviters();
	}
	render () {
		return (
			<OrganizacjaWaiter {...this.props}/>
		)
	}
}
const mapStateToProps = (state) => ({
	inviters: state.organizacja.inviters
})
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(OrganizacjaWaiterContainer);