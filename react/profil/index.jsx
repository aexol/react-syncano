import ReactDOM from 'react-dom';
import React from 'react';
import BaseApp from './apps/BaseApp.jsx';
import SzkoleniaApp from './apps/SzkoleniaApp.jsx';
import CalendarApp from './apps/CalendarApp.jsx';
import CoopApp from './apps/CoopApp.jsx';
import EditApp from './apps/EditApp.jsx';
import DocsApp from './apps/DocsApp.jsx';
import GoPremium from './apps/GoPremium.jsx';
import LegalApp from './apps/LegalApp.jsx';
import LoginApp from './apps/LoginApp.jsx';
import OrganizacjaApp from './apps/OrganizacjaApp.jsx';
import OrganizacjaWaiterContainer from './containers/OrganizacjaWaiterContainer.jsx'
import 'react-select/dist/react-select.css';
import {
	createHistory
}
from 'history';
import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
}
from 'redux';
import {
	Provider,
	connect
}
from 'react-redux';
import {
	Router,
	Route,
	useRouterHistory,
	IndexRoute
}
from 'react-router';
import {
	syncHistoryWithStore,
	routerReducer,
	routerMiddleware
}
from 'react-router-redux';
import {
	checkStatus
}
from './actions/auth.jsx';
import MenuProfil from './menu';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
const reducer = combineReducers({
	...reducers,
	routing: routerReducer
});
const browserHistory = useRouterHistory(createHistory)({
	basename: '/accounts/profile'
})
let middleware = [
	thunk, routerMiddleware(browserHistory)
];
const store = createStore(reducer, applyMiddleware(...middleware));
const history = syncHistoryWithStore(browserHistory, store) // store.dispatch(checkStatus('/grupa'))
ReactDOM.render(<Provider store={store}>
	<Router history={history}>
		<Route component={BaseApp} path="/">
			<IndexRoute component={LoginApp}/>
			<Route component={CalendarApp} path="/kalendarz"/>
			<Route component={CoopApp} path="/wspolpraca"/>
			<Route component={DocsApp} path="/pliki"/>
			<Route component={EditApp} path="/edycja"/>
			<Route component={GoPremium} path="/premium"/>
			<Route component={LegalApp} path="/legal"/>
			<Route component={OrganizacjaApp} path="/organizacja"/>
			<Route component={OrganizacjaWaiterContainer} path="/grupa"/>
		</Route>
	</Router>
</Provider>, document.getElementById('root_react'));