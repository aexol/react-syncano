import * as types from '../constants/calendar.jsx';
const calendar = (state = {
	events: [],
	modalOpen: false,
	modalContent: {}
},
action) => {
	switch (action.type) {
	case types.OPEN_MODAL:
		return {
			...state,
			modalOpen: true,
			modalContent: {
				...action
			}
		}
	case types.CLOSE_MODAL:
		return {
			...state,
			modalOpen: false
		}
	case types.GET_EVENTS:
		return {
			...state,
			events: action.events
		}
	case types.DELETE_EVENT:
		return {
			...state,
			events: state.events.filter(e => parseInt(e.id) !== parseInt(action.id))
		}
	case types.ADD_EVENT:
		return {
			...state,
			events: [
				...state.events, action.event
			]
		}
	default:
		return state
	}
}
export
default calendar;