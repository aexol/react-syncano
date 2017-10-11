import * as types from '../constants/uni.jsx'
import * as atypes from '../constants/auth.jsx'
import {INSTANCE_NAME} from '../server/config.jsx'
import Syncano from 'syncano-client'
import React from 'react'
import EditableString from '../syncano/EditableString'
const s = new Syncano(INSTANCE_NAME)
export const syncanoValidate = ({username, token}) => (dispatch, getState) => {
  s.post('rest-auth/validate', {username, token}).then(json => {
    dispatch({
      valid: json.valid,
      type: atypes.VALIDATE
    })
  })
}
export const syncanoRefreshToken = ({username, token}) => (
  dispatch,
  getState
) => {
  s.post('rest-auth/refresh', {username, token}).then(json => {
    dispatch({
      token: json.token,
      type: atypes.LOGIN
    })
  })
}
export const syncanoLogin = ({username, password}) => (dispatch, getState) => {
  s.post('rest-auth/login', {username, password}).then(json => {
    console.log(json)
    s.setToken(json.token)
    dispatch({
      token: json.token,
      type: atypes.LOGIN
    })
    dispatch({
      type: atypes.SAVE_USERNAME,
      username: json.username
    })
  })
}
export const syncanoLogout = () => (dispatch, getState) => {
  dispatch({
    type: atypes.LOGOUT
  })
}
export const syncanoList = ({model}) => (dispatch, getState) => {
  s
    .get('rest-framework/list', {
      model
    })
    .then(json => {
      dispatch({
        json,
        name: model,
        type: types.GET_MODEL
      })
    })
}
export const syncanoAdd = ({model, data}) => (dispatch, getState) => {
  s
    .post('rest-framework/add', {
      model,
      data
    })
    .then(json => {
      dispatch({
        json,
        name: model,
        type: types.ADD_MODEL
      })
    })
}
export const syncanoUpdate = ({model, data, id}) => (dispatch, getState) => {
  s
    .patch('rest-framework/update', {
      model,
      id,
      data
    })
    .then(json => {
      dispatch({
        json,
        name: model,
        type: types.UPDATE_MODEL
      })
    })
}
export const syncanoDelete = ({model, id}) => (dispatch, getState) => {
  s
    .patch('rest-framework/remove', {
      model,
      id
    })
    .then(json => {
      dispatch({
        id,
        name: model,
        type: types.DELETE_MODEL
      })
    })
}
export const getString = (name, content = 'Some text') => (
  dispatch,
  getState
) => {
  let str = getState().uni.text
  str = str || []
  if (str.length === 0) {
    return 'Loading ...'
  }
  return (
    <EditableString
      save={(id, s) => {
        dispatch(
          syncanoUpdate({
            id,
            model: 'text',
            data: {
              content: s
            }
          })
        )
      }}
      name={name}
      content={content}
    />
  )
}
