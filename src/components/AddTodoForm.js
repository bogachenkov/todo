import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import {addTodo} from "../actions/index";


class AddTodoForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: ''
		}
	}
	
	handleChange = (e) => {
		this.setState({value: e.target.value})
	};
	
	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.value.length) return;
		this.props.onAdd(this.state.value, this.props.date);
		this.setState({value: ''})
	};
	
	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className="addTodoForm" >
				<TextField
					hintText="Добавить задание"
					onChange={this.handleChange}
					value={this.state.value}
					//underlineStyle={{borderColor: "rgb(255,145,0)"}}
					underlineFocusStyle={{borderColor: "rgb(255,145,0)"}}
					style={{width: '70%'}}
				/>
				<FloatingActionButton
						mini={true}
						type="submit"
						backgroundColor="rgb(255,145,0)"
						disabled={!this.state.value.length} >
					<ContentAdd />
				</FloatingActionButton>
			</form>
		);
	}
}

AddTodoForm.propTypes = {
	date: PropTypes.string.isRequired
};

export default connect(state => ({date: state.date}), dispatch => ({onAdd: (id, title) => dispatch(addTodo(id, title))}))(AddTodoForm);
