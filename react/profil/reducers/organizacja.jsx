import * as types from '../constants/organizacja.jsx';
const organizacja = (state = {
	users: [],
	invites: [],
	inviters: []
},
action) => {
	switch (action.type) {
	case types.GET_USERS:
		return {
			...state,
			users: action.json
		}
		break;
	case types.GET_INVITES:
		return {
			...state,
			invites: action.json
		}
		break;
	case types.GET_INVITERS:
		console.log(action.json);
		return {
			...state,
			inviters: action.json
		}
		break;
	case types.ADD_INVITE:
		return {
			...state,
			invites: [
				...state.invites, action.json
			]
		}
	default:
		return {
			...state
		}
	}
}
export
default organizacja;