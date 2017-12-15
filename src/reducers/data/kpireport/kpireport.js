	import {
		createStore,
		applyMiddleware,
		combineReducers
	} from 'redux';

	import {
		List
	} from './list/list';



	export const userProfile = combineReducers({
		List
	});