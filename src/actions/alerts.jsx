import * as types from "../constants/alerts.jsx";
export const addAlert = (text) => (dispatch,
getState) => {
	dispatch({
		type: types.ADD_ALERT,
		text
	})
	setTimeout(() => {
		dispatch({
			type: types.REMOVE_ALERT
		})
	}, 6000)
}