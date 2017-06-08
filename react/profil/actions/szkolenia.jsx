import * as types from '../constants/szkolenia.jsx';
export const fetchSzkolenia = dispatch => {
	fetch('/szkolenia/').then(response => response.json()).then(json => dispatch(getSzkolenia(json.map(v => ({
		...v,
		start: new Date(v.start),
		end: new Date(v.end)
	})))))
}
export const fetchAddSzkolenie = dispatch => szkolenie => {}
export const getSzkolenia = szkolenia => ({
	type: types.GET_SZKOLENIA,
	szkolenia: szkolenia
})
export const addSzkolenie = szkolenie => ({
	type: types.ADD_SZKOLENIE,
	szkolenie: szkolenie
})