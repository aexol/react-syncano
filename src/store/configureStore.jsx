import Store, { thunk } from 'repatch'
import { getToken, getUsername } from "../server/config";
export const store = new Store({
  alerts:[],
  token: getToken(),
  username: getUsername(),
  valid: null
}).addMiddleware(thunk);
