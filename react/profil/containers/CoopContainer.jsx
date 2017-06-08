import React,
{
	PropTypes
}
from 'react'
import {
	connect
}
from 'react-redux'
import Coop from '../components/Coop.jsx'
import moment from 'moment';
import {
	getUsers,
	setActiveMessageUser,
	addMessage,
	sendMessage
}
from '../actions/users.jsx';
import {
	bindActionCreators
}
from 'redux';
import * as actions from '../actions';
class CoopContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMessage: "",
			socket: ""
		}
	}
	onReceiveMessage = (message) => {
		const {
			actions
		} = this.props;
		var json = JSON.parse(message.data)
		actions.addMessage(json)
	}
	changeSocket = (user) => {
		const {
			socket
		} = this.state;
		const {
			me,
			actions
		} = this.props;
		if (socket !== "") {
			this.state.socket.close();
		}
		const socketURL = `ws://${window.location.host}/${user.id}`;
		const webSocketPoint = new WebSocket(socketURL);
		this.setState({
			socket: webSocketPoint
		})
	}
	componentWillMount() {
		const {
			actions,
			me
		} = this.props;
		actions.isPremium()
		actions.getUsers()
	}
	componentDidUpdate() {
		const {
			me
		} = this.props;
		if (me.id && this.state.userSocket === undefined) {
			const socketURL = `ws://${window.location.host}/${me.id}`;
			const webSocketPoint = new WebSocket(socketURL);
			webSocketPoint.onmessage = this.onReceiveMessage;
			this.setState({
				userSocket: webSocketPoint
			})
		}
	}
	typeMessage(e) {
		this.setState({
			currentMessage: e.target.value
		})
	}
	onChangeUser(user) {
		const {
			actions
		} = this.props;
		this.changeSocket(user);
		actions.setActiveMessageUser(user);
	}
	onSendMessage(e) {
		e.preventDefault();
		const {
			actions,
			me,
			message_user
		} = this.props;
		var message = {
			text: this.state.currentMessage,
			date: new Date(),
			author: me,
			to: message_user.id,
			isSocket: true
		}
		actions.sendMessage(message)
		this.state.socket.send(JSON.stringify(message));
		this.setState({
			currentMessage: ""
		})
	}
	render () {
		const {
			users,
			message_user,
			messages,
			me
		} = this.props;
		const {
			currentMessage
		} = this.state;
		const notifications = messages.filter(m => m.isSocket === true && m.to === me.id)
		var md = {};
		for (var m of messages) {
			var messageDate = moment(m.date).format("DD-MM-YYYY")
			md[messageDate] = md[messageDate] ? [
				...md[messageDate], m
			] : [m]
		}
		md = Object.keys(md).map((k) => ({
			date: k,
			messages: md[k]
		}));
		return (
			<Coop currentMessage={currentMessage} message_user={message_user} messages={md} onChangeUser={(user_id) => {
					this.onChangeUser(user_id);
				}} onSendMessage={(e) => {
					this.onSendMessage(e)
				}} typeMessage={(e) => {
					this.typeMessage(e)
				}} users={users}/>
		)
	}
}
const mapStateToProps = (state) => ({
	users: state.users.users,
	message_user: state.users.message_user,
	messages: state.users.messages,
	me: state.users.me
})
const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(actions, dispatch)
})
export
default connect(mapStateToProps, mapDispatchToProps)(CoopContainer);