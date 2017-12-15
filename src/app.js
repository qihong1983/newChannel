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

 import './theme/antd.css';

 // import './theme/channel.less';

 // import {
 // 	userProfile
 // } from './reducers/data/userprofile/list';

 import {
 	userProfile
 } from './reducers/data/userprofile/userprofile';


 const urlpa = (state, action) => {
 	if (typeof state === "undefined") {
 		return {
 			url: '/data/userprofile'
 		};
 	}

 	switch (action.type) {
 		case "urlpa":

 			return Object.assign({}, state, {
 				url: action.payload
 			});
 			break;
 		default:
 			return state;
 	}
 }

 const reducer = combineReducers({
 	userProfile,
 	urlpa,
 	routing: routerReducer
 });

 // const store = createStore(reducer, {
 // 	userProfile: {
 // 		list: [{
 // 			"id": 1,
 // 			"key": 0,
 // 			"date": "2017-05-17",
 // 			"newUsers": "534,123",
 // 			"activeUser": "444,123",
 // 			"oprations": ""
 // 		}]
 // 	},
 // 	routing: routerReducer
 // }, applyMiddleware(thunk));


 const store = createStore(reducer, {
 		userProfile: {
 			List: {
 				tableList: [],
 				os: 24
 			}
 		}
 	},
 	applyMiddleware(thunk));



 // Create an enhanced history that syncs navigation events with the store 
 const history = syncHistoryWithStore(hashHistory, store);

 ReactDOM.render(
 	<Provider store = {store}>
 		<Routers history={history} />
 	</Provider>,
 	document.getElementById('test')
 );