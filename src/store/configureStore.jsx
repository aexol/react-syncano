import Store, { thunk } from 'repatch'
import { TOKEN_NAME } from "../server/config";
import Cookies from 'js-cookie';
export const store = new Store({
  alerts:[],
  token: Cookies.get(`${TOKEN_NAME}-token`),
  username: Cookies.get(`${TOKEN_NAME}-username`),
  valid: null
}).addMiddleware(thunk);
