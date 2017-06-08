import * as types from '../constants/users.jsx';
const users = (state = {
	users: [],
	messages: [],
	message_user: [],
	me: {}
},
action) => {
	switch (action.type) {
	case types.SET_ME:
		return {
			...state,
			me: action.me
		}
		break;
	case types.SET_ACTIVE_USERS:
		return {
			...state,
			users: action.users.filter(u => u.id !== state.me.id)
		}
		break;
	case types.SET_ACTIVE_MESSAGE_USER:
		return {
			...state,
			message_user: action.user
		}
		break;
	case types.SET_MESSAGES:
		return {
			...state,
			messages: action.messages
		}
		break;
	case types.ADD_MESSAGE:
		return {
			...state,
			messages: [
				...state.messages, action.message
			]
		}
		break;
	default:
		return state
	}
}
export
default users;