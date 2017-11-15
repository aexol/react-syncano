import Cookies from 'js-cookie';
import Syncano from 'syncano-client'
export const INSTANCE_NAME = 'dawn-hill-4437';
export const s = new Syncano(INSTANCE_NAME)
export const TOKEN_NAME = 'syncano';
export const saveToken = token => Cookies.set("jwt-service-aexol-token", token, {
  expires: 365
})
export const removeToken = () => {
  Cookies.remove(`${TOKEN_NAME}-token`)
}
export const getToken = () => {
  return Cookies.get(`${TOKEN_NAME}-token`)
}
export const jwtFetch = (endpoint,
data,
headers = {}) => {
  return fetch(endpoint, {
    headers: {
      "Authorization": "JWT " + getToken(),
      "Accept": "application/json",
      "Content-Type": "application/json",
      ...headers
    },
    ...data
  })
}
