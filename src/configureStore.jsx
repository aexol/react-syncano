import Store, { thunk } from 'repatch'
import { getToken, getUsername } from "./syncano/server/config";
export const store = new Store({
  token: getToken(),
  username: getUsername(),
  syncState:{},
  valid: null
}).addMiddleware(thunk);
