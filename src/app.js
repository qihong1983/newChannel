 "use strict"

 import React from 'react';
 import ReactDOM from 'react-dom';
 import PropTypes from 'prop-types';

 import {
 	createStore,
 	applyMiddleware,
 	combineReducers
 } from 'redux';

 import {
 	connect,
 	Provider
 } from 'react-redux';

 import {
 	historyMiddleware,
 	syncHistoryWithStore,
 	routerReducer
 } from 'react-router-redux';


 const thunk = require('redux-thunk').default;

 import {
 	Router,
 	Route,
 	IndexRoute,
 	IndexRedirect,
 	hashHistory,
 	useRouterHistory
 } from 'react-router';



 import Routers from './routers/config';

 // import './theme/antd.css';

 import 'antd/dist/antd.css';

 // import './theme/channel.less';


 import {
 	profileList,
 	userList
 } from './reducers/data';


 const reducer = combineReducers({
 	profileList,
 	userList,
 	routing: routerReducer
 });



 const store = createStore(reducer, applyMiddleware(thunk));



 // Create an enhanced history that syncs navigation events with the store 
 const history = syncHistoryWithStore(hashHistory, store);

 ReactDOM.render(
 	<Provider store = {store}>
 		<Routers history={history} />
 	</Provider>,
 	document.getElementById('test')
 );