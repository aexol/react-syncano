import {
	connect
}
from 'react-redux'
import Calendar from '../components/Calendar.jsx';
import * as actions from '../actions';
import {
	bindActionCreators
}
from 'redux';
import React,
{
	PropTypes
}
from 'react';
class CalendarList extends React.Component {
	componentDidMount() {
		const {
			actions
		} = this.props;
	}
	componentWillMount() {
		const {
			getModel,
			isPremium
		} = this.props.actions;
		isPremium();
		getModel({
			name: "terminy",
			endpoint: `/rest/terminakt/`
		})
	}
	render () {
		return (
			<Calendar {...this.props}/>
		)
	}
}
const mapStateToProps = (state) => ({
	terminy: state.uni.terminy ? state.uni.terminy : []
})
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(CalendarList);