import * as types from '../constants/uni.jsx';
import {
	djangoFetch,
	djangoJWT,
	getCookie
}
from '../../django';
import {
	addAlert
}
from './alerts.jsx';
export const addModel = ({
	name,
	endpoint,
	reducer,
	data
}) => (dispatch,
getState) => {
	djangoJWT(endpoint, {
		method: 'post',
		body: JSON.stringify(data)
	}).then(response => response.json()).then(json => {
		dispatch({
			type: types.ADD_MODEL,
			name,
			json,
			reducer
		})
		dispatch(addAlert(`Dodano ${name}`))
	})
}
export const updateModel = ({
	name,
	endpoint,
	reducer,
	data
}) => (dispatch,
getState) => {
	djangoJWT(endpoint, {
		method: 'put',
		body: JSON.stringify(data)
	}).then(response => response.json()).then(json => {
		dispatch({
			type: types.UPDATE_MODEL,
			name,
			json,
			reducer
		})
		dispatch(addAlert(`Zmieniono ${name}`))
	})
}
export const getModel = ({
	name,
	endpoint,
	reducer
}) => (dispatch,
getState) => {
	djangoJWT(endpoint).then(response => response.json()).then(json => {
		dispatch({
			type: types.GET_MODEL,
			name,
			json,
			reducer
		})
	})
}
export const deleteModel = ({
	name,
	reducer,
	id,
	endpoint
}) => (dispatch,
getState) => {
	djangoJWT(endpoint, {
		method: "delete"
	}).then(response => {
		dispatch({
			type: types.DELETE_MODEL,
			name,
			id,
			reducer
		})
		dispatch(addAlert(`Usunięto ${name}`))
	})
}