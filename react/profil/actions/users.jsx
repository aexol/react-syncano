import * as types from '../constants/users.jsx';
import {
	djangoJWT
}
from '../../django';
import {
	push
}
from 'react-router-redux';
export const setMe = () => (dispatch,
getState) => {
	djangoJWT('/rest/me/', {}).then(response => response.json()).then(json => dispatch({
		type: types.SET_ME,
		me: json
	}))
}
export const isPremium = (path = "/grupa/") => (dispatch,
getState) => {
	djangoJWT('/rest/me/', {}).then(response => response.json()).then(json => {
		if (json.organizacja == undefined) {
			dispatch(push(path))
		}
	})
}
export const setActiveUsers = users => ({
	type: types.SET_ACTIVE_USERS,
	users
})
export const addMessage = message => ({
	type: types.ADD_MESSAGE,
	message
})
export const setMessages = messages => ({
	type: types.SET_MESSAGES,
	messages
})
export const fetchMessages = user => (dispatch,
getState) => {
	djangoJWT(`/rest/messages/${user.id}/`, {}).then(response => response.json()).then(json => {
		dispatch(setMessages(json))
	})
}
export const sendMessage = message => (dispatch,
getState) => {
	djangoJWT("/rest/messages/", {
		method: "post",
		body: JSON.stringify({
			text: message.text,
			to: getState().users.message_user.id
		})
	}).then(response => response.json()).then(json => {
		dispatch(addMessage(message))
	})
}
export const getUsers = () => (dispatch,
getState) => {
	djangoJWT("/rest/users/", {}).then(response => response.json()).then(json => dispatch(setActiveUsers(json)))
}
export const setActiveMessageUser = user => (dispatch,
getState) => {
	dispatch(fetchMessages(user))
	dispatch({
		type: types.SET_ACTIVE_MESSAGE_USER,
		user
	})
}