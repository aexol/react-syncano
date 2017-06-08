import {
	djangoJWT
}
from '../../django';
import * as types from '../constants/legal.jsx';
export const searchPhrases = q => (dispatch,
getState) => {
	djangoJWT(`/rest/legal/?search=${q}`, {}).then(response => response.json()).then(json => {
		dispatch({
			type: types.SET_PHRASES,
			phrases: json
		})
	})
}
export const categoryPhrases = q => (dispatch,
getState) => {
	djangoJWT(`/rest/legal/?category=${q}`, {}).then(response => response.json()).then(json => {
		dispatch({
			type: types.SET_PHRASES,
			phrases: json
		})
	})
}