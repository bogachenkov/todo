import React from 'react';

import TodoList from './components/TodoList';
import Form from './components/AddTodoForm';
import Header from "./components/Header";
import Filter from "./components/Filters";

function App(props) {
	return (
		<div className="app">
			<div className="todoList">
				<Header/>
				<Filter/>
				<TodoList />
				<Form />
			</div>
		</div>
	);
}

export default App;
