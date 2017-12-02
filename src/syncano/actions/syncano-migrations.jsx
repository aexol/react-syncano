import {s} from '../server/config'
export const startMigration = ({
  model,
  link,
  fields,
  key,
  payload
}) => state => dispatch => {
  const postTo = () => {
    s
      .post('migrate/migrate', {
        model,
        fields,
        link,
        payload,
        key
      })
      .then(response => {
        const {status, progress} = response
        if (progress) {
          dispatch(state => ({
            ...state,
            progress: progress.split('/').reduce((a, b) => {
              return parseInt(a) / parseInt(b)
            })
          }))
        }
        if (status === 'migrating') {
          postTo()
        }
      })
  }
  postTo()
}
