import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Todo from "./Todo";
import { connect } from 'react-redux';
import {completeTodo, deleteTodo, editTodo} from "../actions/index";
import {ALL, COMPLETED, UNCOMPLETED} from "../store/constants";

function TodoList(props) {
	if (props.todos.length) {
		return (
			<div className="todoList__list">
				<FlipMove duration={300} easing="ease-out">
					{props.todos.map(todo =>
						<Todo
							key = {todo.id}
							id = {todo.id}
							title = {todo.title}
							isCompleted = {todo.isCompleted}
							onDelete = {props.onDelete}
							onComplete = {props.onComplete}
							onEdit = {props.onEdit}
						/>
					)}
				</FlipMove>
			</div>
		)
	} else {
		return (
			<div className="todoList__list">
				<p className="todolist__empty">
					Записей пока нет.
				</p>
			</div>
		)
	}
}

TodoList.propTypes = {
	todos: PropTypes.array.isRequired
};

export function sortByCompleteStatus(todo, nextTodo) {
	if (todo.isCompleted && !nextTodo.isCompleted) return 1;
	else if (!todo.isCompleted && nextTodo.isCompleted) return -1;
	else return 0;
}

export function filteredTodos(state) {
	const {todos, filter, date} = state;
	const todoFiltered = todos.filter(todo => todo.date === date);
	
	switch (filter) {
		case ALL:
			return todoFiltered.sort(sortByCompleteStatus);
		case COMPLETED:
			return todoFiltered.filter(todo => todo.isCompleted).sort(sortByCompleteStatus);
		case UNCOMPLETED:
			return todoFiltered.filter(todo => !todo.isCompleted).sort(sortByCompleteStatus);
		default:
			return todoFiltered.sort(sortByCompleteStatus);
	}
}

export default connect(state => ({
	todos: filteredTodos(state)
}), dispatch => ({
	onEdit: (id, title) => dispatch(editTodo(id, title)),
	onDelete: id => dispatch(deleteTodo(id)),
	onComplete: id => dispatch(completeTodo(id))
}))(TodoList);
