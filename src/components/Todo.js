import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';


class Todo extends React.Component{
	
	constructor(props) {
		super(props);
		
		this.state = {
			isEditable: false,
		}
	}
	
	handleCheck = () => {
		this.props.onComplete(this.props.id);
	};
	
	handleEdit = () => {
		this.setState({isEditable: !this.state.isEditable});
	};
	
	handleSave = () => {
		let title = this.title.getValue();
		this.props.onEdit(this.props.id, title);
		this.setState({isEditable: !this.state.isEditable});
	};
	
	handleDelete = () => {
		this.props.onDelete(this.props.id);
	};
	
	renderTodo() {
		let todoClassName = `todoList__item ${this.props.isCompleted ? 'todoList__item-disabled' : ''}`;
		return (
			<article className={todoClassName}>
				<div className="todoList__left">
					<div className="todoList__check">
						<Toggle
							onToggle={this.handleCheck}
							thumbStyle={{backgroundColor: '#FFE0B2'}}
							trackStyle={{backgroundColor: '#FFF3E0'}}
							thumbSwitchedStyle={{backgroundColor: 'rgb(255,145,0)'}}
							trackSwitchedStyle={{backgroundColor: '#FFB74D'}}
							toggled={this.props.isCompleted}
						/>
					</div>
					{this.props.title}
				</div>
				<div>
					<IconButton onClick={this.handleEdit} style={{color: 'rgb(255,145,0)'}}>
						<i className="material-icons">mode_edit</i>
					</IconButton>
					<IconButton onClick={this.handleDelete} style={{color: 'rgb(255,145,0)'}}>
						<i className="material-icons">delete</i>
					</IconButton>
				</div>
			</article>
		)
	}
	
	renderEditTodo() {
		return (
			<article className="todoList__item">
				<div className="todoList__left">
					<div className="todoList__check">
						<Toggle onToggle={this.handleCheck}
						        thumbStyle={{backgroundColor: '#FFE0B2'}}
						        trackStyle={{backgroundColor: '#FFF3E0'}}
						        thumbSwitchedStyle={{backgroundColor: 'rgb(255,145,0)'}}
						        trackSwitchedStyle={{backgroundColor: '#FFB74D'}}
						        toggled={this.props.isCompleted}/>
					</div>
					<TextField
							ref={(title) => {this.title = title; }}
							name="title"
							defaultValue={this.props.title}
							autoFocus
					/>
				</div>
				<div>
					<IconButton onClick={this.handleSave} style={{color: 'rgb(255,145,0)'}}>
						<i className="material-icons">save</i>
					</IconButton>
				</div>
			</article>
		)
	}
	npm
	render() {
		return (
			<div>
				{this.state.isEditable ? this.renderEditTodo() : this.renderTodo()}
				<Divider/>
			</div>
		);
	}
}

Todo.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	isCompleted: PropTypes.bool.isRequired,
	onDelete: PropTypes.func,
	onComplete: PropTypes.func,
	onEdit: PropTypes.func
};

/*
<Todo
	key = {todo.id}
	id = {todo.id}
	title = {todo.title}
	isCompleted = {todo.isCompleted}
	onDelete = {props.onDelete}
	onComplete = {props.onComplete}
	onEdit = {props.onEdit}
/>
*/

export default Todo;
