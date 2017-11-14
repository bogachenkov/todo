import { combineReducers } from 'redux';

import { todoReducer } from './todo';
import { filterReducer } from './filter';
import { dateReducer } from './date';

const reducer = combineReducers({
	filter: filterReducer,
	date: dateReducer,
	todos: todoReducer
});

export default reducer;