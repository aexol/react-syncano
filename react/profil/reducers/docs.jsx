import * as types from '../constants/docs.jsx';
const docs = (state = {
	docs: [],
	files: [],
	terminy: [],
	upload_que: [],
	upload_status: 0,
	active: ""
},
action) => {
	switch (action.type) {
	case types.SET_ACTIVE_AKTA:
		return {
			...state,
			active: action.id,
			files: action.files
		}
		break;
	case types.SET_ACTIVE_AKTA_TERMINY:
		return {
			...state,
			active: action.id,
			terminy: action.terminy
		}
		break;
	case types.START_UPLOAD:
		return {
			...state,
			upload_status: 1
		}
		break;
	case types.END_UPLOAD:
		return {
			...state,
			upload_status: 0
		}
		break;
	case types.QUE_PLIK_AKT_UPLOAD:
		return {
			...state,
			upload_que: [
				...state.upload_que, action.file
			]
		}
	case types.SLICE_QUE_PLIK_AKT_UPLOAD:
		return {
			...state,
			upload_que: state.upload_que.slice(1)
		}
	case types.ADD_PLIK_AKT:
		return {
			...state,
			files: [
				...state.files, action.file
			]
		}
		break;
	case types.ADD_TERMIN_AKT:
		return {
			...state,
			terminy: [
				action.termin, ...state.terminy
			]
		}
		break;
	case types.EDIT_TERMIN_AKT:
		const cutTerminy = state.terminy.filter(f => f.id !== parseInt(action.id))
		return {
			...state,
			terminy: [
				action.termin, ...cutTerminy
			]
		}
		break;
	case types.DELETE_TERMIN_AKT:
		return {
			...state,
			terminy: state.terminy.filter(f => f.id !== parseInt(action.id))
		}
		break;
	case types.DELETE_PLIK_AKT:
		return {
			...state,
			files: state.files.filter(f => f.id !== parseInt(action.id))
		}
		break;
	case types.GET_AKTA:
		return {
			...state,
			docs: action.akta
		}
		break;
	case types.CREATE_AKTA:
		return {
			...state,
			docs: [
				...state.docs, action.akta
			]
		}
		break;
	default:
		return state
	}
}
export
default docs;