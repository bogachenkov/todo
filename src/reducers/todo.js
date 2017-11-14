import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO} from "../store/constants";
import 'moment/locale/ru';

export function todoReducer(state = [], action) {
	const {type, payload} = action;
	switch (type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					title: payload.title,
					isCompleted: false,
					date: payload.date
				}
			];
		case DELETE_TODO:
			console.log('delete');
			return state.filter(todo => todo.id !== payload.id);
		case COMPLETE_TODO:
			return state.map(todo => {
				if (todo.id !== payload.id) return todo;
				
				return Object.assign({}, todo, {
					isCompleted: !todo.isCompleted
				})
			});
		case EDIT_TODO:
			return state.map(todo => {
				if (todo.id !== payload.id) return todo;
				
				return Object.assign({}, todo, {
					title: payload.title
				})
			});
		default: return state;
	}
}
