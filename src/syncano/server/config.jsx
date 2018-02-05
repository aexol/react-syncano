import Cookies from 'js-cookie'
import Syncano from 'syncano-client'
import yamlConfig from '../../syncano.yml'
export const INSTANCE_NAME = yamlConfig.instance
export const TOKEN_NAME = `${INSTANCE_NAME}-${yamlConfig.app}`
export const s = new Syncano(INSTANCE_NAME)
export const removeToken = () => {
  Cookies.remove(`${TOKEN_NAME}-token`)
}
export const getToken = () => Cookies.get(`${TOKEN_NAME}-token`)
export const setToken = value => {
  Cookies.set(`${TOKEN_NAME}-token`, value, {
    expires: 365
  })
}

export const removeUsername = () => {
  Cookies.remove(`${TOKEN_NAME}-username`)
}
export const getUsername = () => Cookies.get(`${TOKEN_NAME}-username`)
export const setUsername = value => {
  Cookies.set(`${TOKEN_NAME}-username`, value, {
    expires: 365
  })
}
