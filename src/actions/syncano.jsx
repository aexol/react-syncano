import React from 'react'
import EditableString from '../syncano/EditableString'
import {s, TOKEN_NAME} from '../server/config'
import Cookies from 'js-cookie'
import { castField } from "./utils";
export const syncanoSetModels = () => state => dispatch => {
  s.post('rest-framework/schema').then(json => {
    dispatch(state => ({
      ...state,
      models: json.map(m => ({
        ...m,
        fields: m.fields.map(f => castField(f))
      }))
    }))
  })
}
export const syncanoValidate = ({username, token}) => state => dispatch => {
  s.post('rest-auth/validate', {username, token}).then(json =>
    dispatch(state => ({
      ...state,
      valid: json.valid
    }))
  )
}
export const syncanoRefreshToken = ({username, token}) => state => dispatch => {
  s.post('rest-auth/refresh', {username, token}).then(json => {
    Cookies.set(`${TOKEN_NAME}-token`, json.token, {
      expires: 365
    })
    dispatch(state => ({
      ...state,
      valid: true,
      token: json.token
    }))
  })
}
export const syncanoLogin = ({username, password}) => state => dispatch => {
  s.post('rest-auth/login', {username, password}).then(json => {
    Cookies.set(`${TOKEN_NAME}-token`, json.token, {
      expires: 365
    })
    Cookies.set(`${TOKEN_NAME}-username`, json.username, {
      expires: 365
    })
    s.setToken(json.token)
    dispatch(state => ({
      ...state,
      username: json.username,
      token: json.token,
      valid: true
    }))
  })
}
export const syncanoLogout = () => state => dispatch => {
  dispatch(state => ({
    ...state,
    valid: null,
    token: ''
  }))
}
export const syncanoList = ({model}) => state => dispatch => {
  s
    .get('rest-framework/list', {
      model
    })
    .then(json =>
      dispatch(state => ({
        ...state,
        [model]: json
      }))
    )
}
export const syncanoAdd = ({model, data}) => state => dispatch => {
  s
    .post('rest-framework/add', {
      model,
      data
    })
    .then(json =>
      dispatch({
        ...state,
        [model]: [...state[model], json]
      })
    )
}
export const syncanoUpdate = ({model, data, id}) => state => dispatch => {
  s
    .patch('rest-framework/update', {
      model,
      id,
      data
    })
    .then(json =>
      dispatch({
        ...state,
        [model]: [state[model].map(o => (o.id === json.id ? json : o))]
      })
    )
}
export const syncanoDelete = ({model, id}) => state => dispatch => {
  s
    .patch('rest-framework/remove', {
      model,
      id
    })
    .then(json =>
      dispatch({
        ...state,
        [model]: [state[model].filter(o => o.id !== parseInt(id))]
      })
    )
}
export const getString = (name, content = 'Some text') => state => dispatch => {
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
