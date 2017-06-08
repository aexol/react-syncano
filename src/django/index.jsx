import Cookies from 'js-cookie';
export const getCookie = (name) => {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
export const djangoFetch = (url,
params) => {
  return fetch(url, {
    method: "get",
    credentials: "include",
    headers: {
      "X-CSRFToken": getCookie("csrftoken"),
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    ...params
  })
}
export const djangoJWT = (url,
params,
headers = {},
isProfile = 0) => {
  const token = Cookies.get("jwt-service-aexol-token")
  return fetch(url, {
    method: "get",
    credentials: "include",
    headers: {
      "Authorization": "JWT " + token,
      "Accept": "application/json",
      "Content-Type": "application/json",
      ...headers
    },
    ...params
  }).then(response => {
    if (response.status == 401) {
      if (!isProfile) {
        window.location.href = "/accounts/profile/"
      } else {
        return response
      }
    } else {
      return response
    }
  })
}
export const djangoJWTMulti = (url,
params,
headers = {}) => {
  const token = Cookies.get("jwt-service-aexol-token")
  return fetch(url, {
    method: "get",
    credentials: "include",
    headers: {
      "Authorization": "JWT " + token,
      "Accept": "application/json",
      ...headers
    },
    ...params
  }).then(response => {
    if (response.status == 401) {
      window.location.href = "/accounts/profile/"
    } else {
      return response
    }
  })
}