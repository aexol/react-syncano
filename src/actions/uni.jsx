import * as types from '../constants/uni.jsx';
import {
  addAlert
}
from './alerts.jsx';
import {
  jwtFetch
}
from '../server/config.jsx';
const fetchMethod = jwtFetch;
export const addModel = ({
  name,
  endpoint,
  reducer,
  data,
  move
}) => (dispatch,
getState) => {
  fetchMethod(endpoint, {
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json()).then(json => {
    dispatch({
      type: types.ADD_MODEL,
      name,
      json,
      reducer
    })
    dispatch(addAlert(`Dodano ${name}`));
    if (move) {}
  })
}
export const updateModel = ({
  name,
  endpoint,
  reducer,
  move,
  data
}) => (dispatch,
getState) => {
  fetchMethod(endpoint, {
    method: 'PATCH',
    body: JSON.stringify(data)
  }).then(response => response.json()).then(json => {
    dispatch({
      type: types.UPDATE_MODEL,
      name,
      json,
      reducer
    })
    dispatch(addAlert(`Zmieniono ${name}`))
    if (move) {}
  })
}
export const getModel = ({
  name,
  endpoint,
  reducer
}) => (dispatch,
getState) => {
  fetchMethod(endpoint).then(response => response.json()).then(json => {
    dispatch({
      type: types.GET_MODEL,
      name,
      json,
      reducer
    })
  })
}
export const deleteModel = ({
  name,
  reducer,
  id,
  endpoint
}) => (dispatch,
getState) => {
  fetchMethod(endpoint, {
    method: "delete"
  }).then(response => {
    dispatch({
      type: types.DELETE_MODEL,
      name,
      id,
      reducer
    })
    dispatch(addAlert(`Usunięto ${name}`))
  })
}
export const resortModel = ({
  endpoint,
  name,
  reducer,
  data
}) => (dispatch,
getState) => {
  fetchMethod(endpoint, {
    method: 'post',
    body: JSON.stringify({
      data
    })
  }).then(response => response.json()).then(json => {
    dispatch({
      type: types.RESORT_MODEL,
      data,
      name,
      reducer
    })
  })
}
export const setActiveModel = ({
  name,
  reducer,
  model
}) => (dispatch,
getState) => {
  dispatch({
    type: types.SET_ACTIVE_MODEL,
    name,
    reducer,
    model
  })
}