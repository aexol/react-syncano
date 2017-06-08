import {
	djangoJWT,
	getCookie
}
from '../../django/index.jsx';
import * as types from '../constants/organizacja.jsx';
import {
	addAlert
}
from './alerts.jsx';
import {
	push
}
from 'react-router-redux'
export const getUsersOrganisation = () => (dispatch,
getState) => {
	djangoJWT("/rest/friends/",).then(response => response.json()).then(json => dispatch({
		type: types.GET_USERS,
		json
	}))
}
export const getInvites = () => (dispatch,
getState) => {
	djangoJWT("/rest/organizacja/invites/",).then(response => response.json()).then(json => dispatch({
		type: types.GET_INVITES,
		json
	}))
}
export const getInviters = () => (dispatch,
getState) => {
	djangoJWT("/rest/inviters/",).then(response => response.json()).then(json => dispatch({
		type: types.GET_INVITERS,
		json
	}))
}
export const acceptInviter = id => (dispatch,
getState) => {
	djangoJWT("/rest/inviter/accept/", {
		method: "post",
		body: JSON.stringify({
			id
		})
	}).then(response => response.json()).then(json => {
		dispatch(push('/organizacja'))
	})
}
export const signOff = () => (dispatch,
getState) => {
	djangoJWT("/rest/inviter/signoff/", {
		method: "post"
	}).then(response => response.json()).then(json => {
		dispatch(push('/grupa'))
	})
}
export const createOrganisation = (data) => (dispatch,
getState) => {
	djangoJWT("/rest/organizacja/create/", {
		method: "post",
		body: JSON.stringify({
			...data
		})
	}).then(response => {
		dispatch(push("/organizacja"))
	})
}
export const inviteUser = email => (dispatch,
getState) => {
	djangoJWT("/rest/invite/", {
		method: "post",
		body: JSON.stringify({
			email
		})
	}).then(response => response.json()).then(json => {
		console.log(json);
		dispatch({
			type: types.ADD_INVITE,
			json
		})
		dispatch(addAlert(`Użytkownik ${email} został pomyślnie zaproszony do twojej organizacji`))
	})
}