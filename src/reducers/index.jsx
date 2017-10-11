import uni from './uni.jsx';
import alerts from './alerts.jsx';
import auth from './syncano-auth.jsx';
import migrations from './syncano-migrations.jsx';
import {
  combineReducers
}
from 'redux';
const rootReducer = combineReducers({
  uni,
  alerts,
  auth,
  migrations
})
export
default rootReducer;
