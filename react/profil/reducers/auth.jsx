import * as types from '../constants/auth.jsx';
import Cookies from 'js-cookie';
const reducer = (state = {
	token: Cookies.get('prawowpolsce_t')
},
action) => {
	const {
		type,
		json
	} = action;
	switch (type) {
	case types.LOGIN:
		Cookies.set('prawowpolsce_t', json.token, {
			expires: 365
		});
		return {
			token: json.token,
			...state
		}
	case types.LOGOUT:
		Cookies.remove('prawowpolsce_t')
		return {
			token: '',
			...state
		}
	case types.GET_PROFILE:
		return {
			profile: json,
			...state
		}
		break;
	default:
		return {
			...state
		}
	}
}
export
default reducer;