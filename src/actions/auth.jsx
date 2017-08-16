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
//Obsługa auth
    }
  })
}
export const logout = () => (dispatch,
getState) => {
  dispatch({
    type: types.LOGOUT
  })
  dispatch(push('/admin'))
}