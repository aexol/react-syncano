import * as types from '../constants/legal.jsx';
const legal = (state = {
	phrases: []
},
action) => {
	switch (action.type) {
	case types.SET_PHRASES:
		return {
			...state,
			phrases: action.phrases
		}
	default:
		return state
	}
}
export
default legal;