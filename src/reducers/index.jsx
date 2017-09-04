import uni from './uni.jsx';
import alerts from './alerts.jsx';
import auth from './jwt-auth.jsx';
import {
  combineReducers
}
from 'redux';
const rootReducer = combineReducers({
  uni,
  alerts,
  auth
})
export
default rootReducer;