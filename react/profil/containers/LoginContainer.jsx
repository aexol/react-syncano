import React,
{
	PropTypes
}
from 'react';
import {
	connect
}
from 'react-redux';
import {
	bindActionCreators
}
from 'redux';
import * as actions from '../actions';
import Login from '../components/Login.jsx';
class LoginContainer extends React.Component {
	componentWillMount() {
		const {
			dispatch,
			actions
		} = this.props;
		actions.checkStatus('/organizacja/')
	}
	render () {
		const {
			actions
		} = this.props;
		return (
			<Login actions={actions}/>
		)
	}
}
const mapStateToProps = (state) => ({
	...state
})
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);