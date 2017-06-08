import * as types from '../constants/docs.jsx';
import {
	djangoFetch,
	djangoJWT,
	djangoJWTMulti,
	getCookie
}
from '../../django';
import {
	addAlert
}
from './alerts.jsx';
import FileSaver from 'file-saver';
export const createAkta = akta => (dispatch,
getState) => {
	djangoJWT("/rest/akta/create/", {
		method: "post",
		body: JSON.stringify(akta)
	}).then(response => response.json()).then(json => {
		dispatch({
			type: types.CREATE_AKTA,
			akta: json
		})
		dispatch(addAlert(`Dodano nowe akta`))
	})
}
export const getAkta = () => (dispatch,
getState) => {
	djangoJWT("/rest/akta/", {}).then(response => response.json()).then(json => {
		console.log(json)
		dispatch({
			type: types.GET_AKTA,
			akta: json
		})
	})
}
export const setActiveAkta = id => (dispatch,
getState) => {
	if (!id) {
		dispatch({
			type: types.SET_ACTIVE_AKTA,
			null,
			files: []
		})
		dispatch({
			type: types.SET_ACTIVE_AKTA_TERMINY,
			null,
			terminy: []
		})
		return
	}
	djangoJWT(`/rest/plikakt/${id}/`, {}).then(response => response.json()).then(json => {
		dispatch({
			type: types.SET_ACTIVE_AKTA,
			id,
			files: json
		})
	})
	djangoJWT(`/rest/terminakt/${id}/`, {}).then(response => response.json()).then(json => {
		dispatch({
			type: types.SET_ACTIVE_AKTA_TERMINY,
			id,
			terminy: json
		})
	})
}
export const downloadFile = (path,
name) => (dispatch,
getState) => {
	djangoJWT(`${path}`, {
		method: "GET"
	}).then(response => response.blob()).then(blob => {
		FileSaver.saveAs(blob, name)
	})
}
export const deletePlikAkt = id => (dispatch,
getState) => {
	console.log(id)
	djangoJWT(`/rest/plikakt/delete/${id}/`, {
		method: "GET"
	}).then(response => {
		dispatch({
			type: types.DELETE_PLIK_AKT,
			id
		})
		dispatch(addAlert(`Usunięto plik z akt`))
	})
}
export const executeQueAkta = () => (dispatch,
getState) => {
	let currentQue = getState().docs.upload_que
	let uploadStatus = getState().docs.upload_status
	if (currentQue.length < 1) {
		if (uploadStatus == 1) {
			dispatch({
				type: types.END_UPLOAD
			})
		}
		return
	} else {
		if (uploadStatus == 0) {
			dispatch({
				type: types.START_UPLOAD
			})
		}
	}
	let plik = currentQue[0]
	console.log(plik);
	const aktaId = parseInt(getState().docs.active)
	var fd = new FormData()
	fd.append("plik", plik, plik.name)
	fd.append("akta", aktaId)
	djangoJWTMulti("/rest/plikakt/create/", {
		method: 'post',
		body: fd
	}).then(response => response.json()).then(json => {
		console.log(json)
		dispatch({
			type: types.SLICE_QUE_PLIK_AKT_UPLOAD
		})
		dispatch({
			type: types.ADD_PLIK_AKT,
			file: {
				...json
			}
		})
		dispatch(addAlert(`Dodano nowy plik "${plik.name}" do akt`))
		dispatch(executeQueAkta())
	})
}
export const queAkta = plik => (dispatch,
getState) => {
	dispatch({
		type: types.QUE_PLIK_AKT_UPLOAD,
		file: plik
	})
	let uploadStatus = getState().docs.upload_status
	if (uploadStatus == 0) {
		dispatch(executeQueAkta())
	}
}
export const uploadAkta = plik => (dispatch,
getState) => {
	dispatch(addAlert(`Rozpoczęto upload pliku "${plik.name}" do akt`))
	dispatch(queAkta(plik))
}
export const editTermin = (id,
termin) => (dispatch,
getState) => {
	const aktaId = parseInt(getState().docs.active)
	djangoJWT(`/rest/terminakt/update/${id}/`, {
		method: "put",
		body: JSON.stringify({
			akta: aktaId,
			...termin
		})
	}).then(response => response.json()).then(json => {
		dispatch({
			type: types.EDIT_TERMIN_AKT,
			termin: json
		})
		dispatch(addAlert(`Edytowano termin akt`))
	})
}
export const addTermin = termin => (dispatch,
getState) => {
	const aktaId = parseInt(getState().docs.active)
	console.log(termin)
	djangoJWT("/rest/terminakt/create/", {
		method: "post",
		body: JSON.stringify({
			akta: aktaId,
			...termin
		})
	}).then(response => response.json()).then(json => {
		dispatch({
			type: types.ADD_TERMIN_AKT,
			termin: json
		})
		dispatch(addAlert(`Dodano nowy termin do akt`))
	})
}
export const deleteTermin = id => (dispatch,
getState) => {
	const aktaId = parseInt(getState().docs.active)
	djangoJWT(`/rest/terminakt/delete/${id}`, {
		method: "delete"
	}).then(response => {
		dispatch({
			type: types.DELETE_TERMIN_AKT,
			id
		})
		dispatch(addAlert(`Usunięto termin z akt`))
	})
}