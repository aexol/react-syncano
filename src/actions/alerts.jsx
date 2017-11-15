export const addAlert = text => state => dispatch => {
  dispatch(state => ({
    ...state,
    alerts: [
      ...state.alerts,
      {
        text,
        id: state.alerts.length
      }
    ]
  }))
  setTimeout(() => {
    dispatch(state => ({
      ...state,
      alerts: state.alerts.slice(1)
    }))
  }, 6000)
}
