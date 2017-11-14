import {
	ADD_TODO,
	COMPLETE_TODO,
	DELETE_TODO,
	EDIT_TODO,
	SET_FILTER,
	SET_DATE
} from "../store/constants";

export function addTodo(title, date) {
	return {
		type: ADD_TODO,
		payload: {
			title,
			date
		}
	}
}

export function deleteTodo(id) {
	return {
		type: DELETE_TODO,
		payload: {
			id
		}
	}
}

export function completeTodo(id) {
	return {
		type: COMPLETE_TODO,
		payload: {
			id
		}
	}
}

export function editTodo(id, title) {
	return {
		type: EDIT_TODO,
		payload: {
			id,
			title
		}
	}
}

export function setFilter(filter) {
	return {
		type: SET_FILTER,
		payload: {
			filter
		}
	}
}

export function setDate(date) {
	return {
		type: SET_DATE,
		payload: {
			date
		}
	}
}