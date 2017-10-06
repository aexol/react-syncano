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
    token,
    valid,
    username
  } = action;
  switch (type) {
  case types.VALIDATE:
    return {
      ...state,
      valid
    }
  case types.LOGIN:
    Cookies.set(`${TOKEN_NAME}-token`, token, {
      expires: 365
    });
    return {
      ...state,
      valid:true,
      token
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
    Cookies.set(`${TOKEN_NAME}-username`, username, {
      expires: 365
    });
    return {
      ...state,
      username
    }
  default:
    return {
      ...state
    }
  }
}
export
default reducer;
