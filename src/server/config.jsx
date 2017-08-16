export const HOST = process.env.NODE_ENV === 'production' ? "http://production.host.here" : "http://localhost:8000";
import Cookies from 'js-cookie';
export const TOKEN_NAME = 'react-aexol';
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