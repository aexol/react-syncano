import * as types from '../constants/uni.jsx';
const uni = (state = {},
action) => {
	const {
		name,
		json,
		reducer,
		id
	} = action;
	const objectsName = reducer ? reducer : name;
	switch (action.type) {
	case types.DELETE_MODEL:
		return {
			...state,
			[objectsName]: state[objectsName].filter(f => f.id !== parseInt(id))
		}
		break;
	case types.UPDATE_MODEL:
		const cut = state[objectsName].filter(f => f.id !== parseInt(json.id))
		return {
			...state,
			[objectsName]: [
				...cut, json
			]
		}
	case types.GET_MODEL:
		return {
			...state,
			[objectsName]: json
		}
	case types.ADD_MODEL:
		console.log(name, json)
		return {
			...state,
			[objectsName]: [
				...state[objectsName], json
			]
		}
		break;
	default:
		return {
			...state
		}
	}
}
export
default uni;