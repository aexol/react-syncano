import * as types from '../constants/alerts.jsx';
const alerts = (state = {
	alerts: []
},
action) => {
	switch (action.type) {
	case types.ADD_ALERT:
		return {
			...state,
			alerts: [
				...state.alerts, {
					text: action.text,
					id: state.alerts.length
				}
			]
		}
		break;
	case types.REMOVE_ALERT:
		console.log(state.alerts)
		return {
			...state,
			alerts: state.alerts.slice(1)
		}
		break;
	default:
		return {
			...state
		}
	}
}
export
default alerts;