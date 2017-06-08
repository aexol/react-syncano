import Cookie from 'js-cookie';
import {
	djangoFetch,
	djangoJWT
}
from '../../django';
import * as types from '../constants/auth.jsx';
import {
	push
}
from 'react-router-redux';
import {
	addAlert
}
from './alerts.jsx';
export const checkStatus = (where) => (dispatch,
getState) => {
	const {
		token
	} = getState().auth;
	console.log(token);
	if (Boolean(token) == true) {
		djangoJWT('/rest/me/', {}, {}, 1).then(response => {
			if (response.status == 401) {} else {
				dispatch(push("/organizacja"))
			}
		})
	}
}
export const login = (username,
password) => (dispatch,
getState) => {
	djangoFetch('/api-token-auth/', {
		method: "POST",
		body: JSON.stringify({
			username,
			password
		})
	}).then(response => response.json()).then(json => {
		dispatch({
			type: types.LOGIN,
			json
		})
		dispatch(addAlert(`${username} zostałeś pomyślnie zalogowany`))
		dispatch(push('/organizacja/'))
	})
}
export const register = (data) => (dispatch,
getState) => {
	djangoFetch('/rest-auth/registration/', {
		method: "POST",
		body: JSON.stringify({
			...data
		})
	}).then(response => response.json()).then(json => {
		dispatch(addAlert(`${json.email} zostałeś pomyślnie zarejestrowany możesz się zalogować`))
	})
}
export const logout = () => (dispatch,
getState) => {
	dispatch({
		type: types.LOGOUT
	})
	dispatch(addAlert(`Zostałeś pomyślnie wylogowany`))
	window.location.href = "/accounts/profile/"
}
export const forgotPassword = (email) => (dispatch,
getState) => {
	djangoFetch('/rest-auth/password/reset/', {
		method: "POST",
		body: JSON.stringify({
			email
		})
	}).then(response => response.json()).then(json => {
		console.log(json);
		dispatch(addAlert(`Email z linkiem resetu hasła został pomyślnie wysłany na twój adres`))
	})
}
export const changeProfile = (data) => (dispatch,
getState) => {
	djangoJWT("/rest-auth/user/", {
		method: "patch",
		body: JSON.stringify({
			...data
		})
	}).then(response => response.json()).then(json => dispatch(addAlert(`Dane użytkownika ${json.email} zmieniono pomyślnie`)))
}
export const getProfile = () => (dispatch,
getState) => {
	djangoJWT("/rest-auth/user/", {}).then(response => response.json()).then(json => dispatch({
		type: types.GET_PROFILE,
		json
	}))
}