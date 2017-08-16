import uni from './uni.jsx';
import alerts from './alerts.jsx';
import auth from './jwt-auth.jsx';
import {
  combineReducers
}
from 'redux';
import {
  routerReducer
}
from 'react-router-redux';
const rootReducer = combineReducers({
  uni,
  alerts,
  auth,
  routing: routerReducer
})
export
default rootReducer;