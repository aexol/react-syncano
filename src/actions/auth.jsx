import * as types from '../constants/auth.jsx';
import {
  HOST,
  saveToken
}
from '../server/config.jsx';
import {
  push
}
from 'react-router-redux';
import {
  addAlert
}
from './alerts.jsx';
import {
  jwtFetch
}
from '../server/config.jsx';
const fetchMethod = jwtFetch;
export const validate = () => (dispatch,
getState) => {
  const token = getState().auth.token;
  const valid = getState().auth.valid;
  if (token === undefined || token.length === 0) {
    dispatch({
      type: types.VALIDATE,
      valid: false
    })
    return
  } else if (valid === true) {
    return
  }
  fetch(`${HOST}/api-token-verify/`, {
    method: 'post',
    body: JSON.stringify({
      token
    }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.status === 200) {
      dispatch({
        type: types.VALIDATE,
        valid: true
      })
    } else {
      dispatch({
        type: types.VALIDATE,
        valid: false
      })
    }
  })
}
export const login = data => (dispatch,
getState) => {
  fetch(`${HOST}/api-token-auth/`, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => response.json()).then(json => {
    if (json.non_field_errors) {
      dispatch(addAlert("Błędna nazwa użytkownika lub hasło"))
    }
    if (json.token && json.token !== "error") {
      dispatch({
        type: types.LOGIN,
        json
      })
    }
  })
}
export const logout = () => (dispatch,
getState) => {
  dispatch({
    type: types.LOGOUT
  })
  dispatch(push('/login'))
}