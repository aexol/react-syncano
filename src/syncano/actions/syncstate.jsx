import {s} from '../server/config'
class See {
  constructor (appid, c, userScope = false) {
    this.appid = appid
    this.userScope = userScope
    new Proxy(c, {
      apply: (target, thisArg, argumentList) => {
        console.log(target, thisArg, argumentList)
      }
    })
  }
}
class Transaction {
  constructor ({appid, tid, entity, action, payload, remoteId = null}) {
    this.appid = appid
    this.tid = tid
    this.entity = entity
    this.action = action
    this.payload = payload
    this.remoteId = remoteId
  }
  setRemote (id) {
    this.remoteId = id
    return this
  }
  toObject () {
    let {appid, tid, entity, action, payload} = this
    return {appid, tid, entity, action, payload}
  }
}
const resolveNewTransactions = (state, name, t) => ({
  ...state,
  syncState: {
    ...state.syncState,
    [name]: {
      ...(state.syncState[name] ? state.syncState[name] : {}),
      transactions: [
        ...(state.syncState[name].transactions
          ? state.syncState[name].transactions
          : []),
        ...t
      ]
    }
  }
})
export const sync = ({
  appid,
  tid,
  entity,
  action,
  payload,
  latestTid = 0
}) => state => dispatch => {
  let name = `${appid}-${entity}`
  let t = new Transaction({
    appid,
    tid,
    entity,
    action,
    payload
  })
  dispatch(state => resolveNewTransactions(state, name, [t]))
  s
    .post('sync-state/sync', {
      entity,
      tid,
      appid,
      action,
      payload,
      secret,
      latestTid: state.syncState[name].latestTid
        ? state.syncState[name].latestTid
        : latestTid
    })
    .then(({id}) => {
      dispatch(state => ({
        ...state,
        syncState: {
          ...state.syncState,
          [name]: {
            ...state.syncState[name],
            transactions: state.syncState[name].transactions.map(
              tr => (tr.tid === tid ? tr.setRemote(id) : tr)
            ),
            latestTid: id
          }
        }
      }))
    })
}
export const list = ({appid, entity}) => state => dispatch => {
  let name = `${appid}-${entity}`
  s
    .post('sync-state/list', {
      appid,
      entity,
      latestTid: state.syncState[name].latestTid
        ? state.syncState[name].latestTid
        : latestTid
    })
    .then(json => {
      let newTransactions = []
      for (var transaction of json) {
        newTransactions.push(
          new Transaction({...transaction, remoteId: transaction.id})
        )
      }
      dispatch(state => resolveNewTransactions(state, name, newTransactions))
    })
}
