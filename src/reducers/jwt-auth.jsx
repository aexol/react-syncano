import * as types from '../constants/auth.jsx';
import Cookies from 'js-cookie';
import {
  TOKEN_NAME
}
from '../server/config.jsx';
const reducer = (state = {
  token: Cookies.get(`${TOKEN_NAME}-token`),
  username: Cookies.get(`${TOKEN_NAME}-username`),
  valid: null
},
action) => {
  const {
    type,
    json
  } = action;
  switch (type) {
  case types.VALIDATE:
    return {
      ...state,
      valid: action.valid
    }
  case types.LOGIN:
    Cookies.set(`${TOKEN_NAME}-token`, json.token, {
      expires: 365
    });
    return {
      ...state,
      token: json.token
    }
  case types.LOGOUT:
    Cookies.remove(`${TOKEN_NAME}-token`);
    Cookies.remove(`${TOKEN_NAME}-username`);
    return {
      ...state,
      valid: null,
      token: ""
    }
  case types.SAVE_USERNAME:
    Cookies.set(`${TOKEN_NAME}-username`, action.username, {
      expires: 365
    });
    return {
      ...state,
      username: action.username
    }
  default:
    return {
      ...state
    }
  }
}
export
default reducer;