import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Counter(props) {
	return (
		<p> Заданий: {props.todos.length} </p>
	)
}


Counter.propTypes = {
	todos: PropTypes.array.isRequired,
};

export function filteredTodos(state) {
	const {todos, date} = state;
	const todoFiltered = todos.filter(todo => todo.date === date);
	return todoFiltered.filter(todo => !todo.isCompleted)
}

export default connect(state => ({todos: filteredTodos(state)}))(Counter);
