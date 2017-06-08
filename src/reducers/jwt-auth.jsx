import * as types from '../constants/auth.jsx';
import Cookies from 'js-cookie';
const reducer = (state = {
  token: Cookies.get('jwt-service-aexol-token')
},
action) => {
  const {
    type,
    json
  } = action;
  switch (type) {
  case types.LOGIN:
    Cookies.set('jwt-service-aexol-token', json.token, {
      expires: 365
    });
    return {
      token: json.token,
      ...state
    }
  case types.LOGOUT:
    Cookies.remove('jwt-service-aexol-token')
    return {
      token: '',
      ...state
    }
  default:
    return {
      ...state
    }
  }
}
export
default reducer;