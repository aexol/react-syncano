import * as types from '../constants/calendar.jsx'
import {
	djangoJWT
}
from '../../django';
import moment from 'moment';
export const fetchEvents = dispatch => {
	djangoJWT('/wydarzenia/').then(response => response.json()).then(json => dispatch(getEvents(json.map(v => ({
		...v,
		start: moment(v.start),
		end: moment(v.end)
	})))))
}
export const fetchAddEvent = (event) => (dispatch,
getState) => {
	djangoJWT("/wydarzenia/", {
		method: "post",
		body: JSON.stringify(event)
	}).then(response => response.json()).then(json => {
		console.log(json)
		dispatch({
			type: types.ADD_EVENT,
			event: {
				...json,
				start: moment.utc(json.start),
				end: moment.utc(json.end)
			}
		})
	})
}
export const fetchDeleteEvent = (id) => {
	djangoJWT(`/wydarzenia/${id}/`, {
		method: "delete"
	})
}
export const getEvents = events => ({
	type: types.GET_EVENTS,
	events
})
export const deleteEvent = id => ({
	type: types.DELETE_EVENT,
	id
})
export const openModal = ({
	id,
	typ,
	start,
	end,
	title,
	place
}) => ({
	type: types.OPEN_MODAL,
	typ,
	id,
	start,
	title,
	place,
	end
})
export const closeModal = {
	type: types.CLOSE_MODAL
}