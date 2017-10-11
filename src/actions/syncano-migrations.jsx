import {INSTANCE_NAME} from '../server/config.jsx'
import Syncano from 'syncano-client'
import * as types from '../constants/syncano'
const s = new Syncano(INSTANCE_NAME)
export const startMigration = ({model, link, fields, key, payload}) => (
  dispatch,
  getState
) => {
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
        if(progress){
          dispatch({
            type:types.SET_MIGRATION_PROGRESS,
            progress: progress.split("/").reduce((a,b)=>{return parseInt(a)/parseInt(b)})
          })
        }
        if (status === 'migrating') {
          postTo()
        }
      })
  }
  postTo()
}
