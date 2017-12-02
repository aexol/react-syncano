import Cookies from 'js-cookie'
import Syncano from 'syncano-client'
export const INSTANCE_NAME = 'dawn-hill-4437'
export const s = new Syncano(INSTANCE_NAME)
export const removeToken = () => {
  Cookies.remove(`${INSTANCE_NAME}-token`)
}
export const getToken = () => Cookies.get(`${INSTANCE_NAME}-token`)
export const setToken = value => {
  Cookies.set(`${INSTANCE_NAME}-token`, value, {
    expires: 365
  })
}

export const removeUsername = () => {
  Cookies.remove(`${INSTANCE_NAME}-username`)
}
export const getUsername = () => Cookies.get(`${INSTANCE_NAME}-username`)
export const setUsername = value => {
  Cookies.set(`${INSTANCE_NAME}-username`, value, {
    expires: 365
  })
}
