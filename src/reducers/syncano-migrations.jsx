import * as types from '../constants/syncano.jsx';
const reducer = (state = {},
action) => {
  const {
        type,
        progress
  } = action;
  switch (type) {
    case types.SET_MIGRATION_PROGRESS:
      return {
        ...state,
        progress
      }
  default:
    return {
      ...state
    }
  }
}
export
default reducer;
