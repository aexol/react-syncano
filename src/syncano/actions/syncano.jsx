import React from 'react'
import {
  s,
  setToken,
  getToken,
  setUsername,
  getUsername,
  removeUsername,
  removeToken
} from '../server/config'
import { castField, generateUniq, toFormData } from './utils'
import { error } from 'util';
export const syncano = (
  name,
  args = {},
  success = json => json,
  error = err => err
) => state => dispatch => {
  let a = args
  let sc = success
  let er = error
  if(typeof(args) === "function"){
    a = {}
    sc = args
    er = success
  }
  s.post(name, a).then(json => {
    let extraArgs = sc(json, state)
    dispatch(state => ({
      ...state,
      ...extraArgs
    }))
  }).catch(e => {
    let extraArgs = er(e, state)
    dispatch(state => ({
      ...state,
      ...extraArgs
    }))
  })
}
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
export const syncanoGetConfig = () => state => dispatch => {
  s.post('rest-framework/getconfig').then(json => {
    dispatch(state => ({
      ...state,
      config: json.config
    }))
  })
}
export const syncanoValidate = ({ username, token }) => state => dispatch => {
  s.post('rest-auth/validate', { username, token }).then(json => {
    if (json.valid) {
      s.setToken(token)
    } else {
      removeToken()
      removeUsername()
    }
    return dispatch(state => ({
      ...state,
      valid: json.valid
    }))
  })
}
export const syncanoValid = () => state => dispatch => {
  const { username, token } = state
  if (!username || !token) {
    return dispatch(state => ({
      ...state,
      valid: false
    }))
  }
  s.post('rest-auth/validate', { username, token }).then(json => {
    if (json.valid) {
      s.setToken(token)
    } else {
      removeToken()
      removeUsername()
    }
    return dispatch(state => ({
      ...state,
      valid: json.valid
    }))
  })
}
export const syncanoRefreshToken = ({ username, token }) => state => dispatch => {
  s.post('rest-auth/refresh', { username, token }).then(json => {
    setToken(json.token)
    dispatch(state => ({
      ...state,
      valid: true,
      token: json.token
    }))
  })
}
export const syncanoRegister = ({ username, password }) => state => dispatch => {
  s.post('rest-auth/register', { username, password }).then(json => {
    setToken(json.token)
    setUsername(json.username)
    s.setToken(json.token)
    dispatch(state => ({
      ...state,
      username: json.username,
      token: json.token,
      valid: true,
      errorRegister: false
    }))
  }).catch(error => {
    dispatch(state => ({
      ...state,
      errorRegister: true
    }))
  })
}
export const syncanoLogin = ({ username, password }) => state => dispatch => {
  s.post('rest-auth/login', { username, password }).then(json => {
    setToken(json.token)
    setUsername(json.username)
    s.setToken(json.token)
    dispatch(state => ({
      ...state,
      username: json.username,
      token: json.token,
      valid: true,
      errorLogin: false
    }))
  })
    .catch(error => {
      dispatch(state => ({
        ...state,
        errorLogin: true
      }))
    })
}
export const syncanoLogout = () => state => dispatch => {
  removeUsername()
  removeToken()
  dispatch(state => ({
    ...state,
    valid: null,
    token: ''
  }))
}
export const syncanoList = ({ model }) => state => dispatch => {
  s
    .post('rest-framework/list', {
      model
    })
    .then(json =>
      dispatch(state => ({
        ...state,
        [model]: json
      }))
    ).catch(error => {
      dispatch(state => ({
        ...state,
        restError: error
      }))
    })
}
export const syncanoAdd = ({ model, data }) => state => dispatch => {
  const id = state[model].length + 1
  dispatch(state => ({
    ...state,
    [model]: [...state[model], { ...data, id }]
  }))
  s
    .post('rest-framework/add', toFormData({
      model,
      ...data
    }))
    .then(json => {
      dispatch(state => ({
        ...state,
        [model]: state[model].map(m => (m.id === id ? json : m))
      }))
    }).catch(error => {
      dispatch(state => ({
        ...state,
        restError: error
      }))
    })
}
export const syncanoUpdate = ({ model, data, id }) => state => dispatch => {
  s
    .post('rest-framework/update', toFormData({
      model,
      id,
      ...data
    }))
    .then(json => {
      dispatch(state => ({
        ...state,
        [model]: [...state[model].map(o => (o.id === json.id ? json : o))]
      }))
    }).catch(error => {
      dispatch(state => ({
        ...state,
        restError: error
      }))
    })
}
export const syncanoDelete = ({ model, id }) => state => dispatch => {
  s
    .post('rest-framework/remove', {
      model,
      id
    })
    .then(json => {
      dispatch(state => ({
        ...state,
        [model]: state[model].filter(o => o.id !== parseInt(id))
      })).catch(error => {
        dispatch(state => ({
          ...state,
          restError: error
        }))
      })
    })
}
export const syncanoRestFrameworkConfigure = data => state => (
  dispatch,
  getState
) => {
  s.post('rest-framework/configure', { config: data }).then(json => {
    dispatch(state => ({
      ...state,
      config: json.config
    }))
  })
}
export const syncanoGeosuggest = ({ keyword, params }) => state => dispatch => {
  s.post('google-maps/suggest', {
    keyword,
    params
  }).then(suggestList => {
    dispatch(state => ({
      ...state,
      suggestList
    }))
  })
}
export const syncanoWait = ({ name }) => state => dispatch => {
  dispatch(state => ({
    ...state,
    syncanoWaiting: true
  }))
}

export const syncanoEndWait = ({ name }) => state => dispatch => {
  dispatch(state => ({
    ...state,
    syncanoWaiting: false
  }))
}