import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'material-ui/DatePicker';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/ru';


import {setDate} from "../actions/index";


moment.locale('ru');

class Date extends Component {
	
	handleChange = (e, date) => {
		this.props.onSetDate(moment(date).format('DD MMMM Y'));
	};
	
	openDateModal = (e) => {
		this.dp.openDialog();
	};
	
	handleAddDay = () => {
		this.props.onSetDate(moment(this.props.date, 'DD MMMM Y').add(1, 'd').format('DD MMMM Y'))
	};
	
	handleSubtractDay = () => {
		this.props.onSetDate(moment(this.props.date, 'DD MMMM Y').subtract(1, 'd').format('DD MMMM Y'))
	};
	
	render() {
		return (
				<div className="date">
					<FloatingActionButton mini={true}
					                      backgroundColor="rgb(255,145,0)"
					                      onClick={this.handleSubtractDay}
					>
						<i className="material-icons">keyboard_arrow_left</i>
					</FloatingActionButton>
					
					<h1 onClick={this.openDateModal}
					    className="date__current">
						<span className="date__weekday">{moment(this.props.date, 'DD MMMM Y').format('dddd')}</span>
						<br />
						{this.props.date}
					</h1>
					
					<DatePicker name="DatePicker"
					            onChange={this.handleChange}
					            style={{display: 'none'}}
					            ref={dp => this.dp = dp}/>
						
					<FloatingActionButton mini={true}
					                      backgroundColor="rgb(255,145,0)"
					                      onClick={this.handleAddDay}>
						<i className="material-icons">keyboard_arrow_right</i>
					</FloatingActionButton>
				</div>
		);
	}
}

Date.propTypes = {
	date: PropTypes.string.isRequired
};


export default connect(store => ({date: store.date}), dispatch => ({onSetDate: date => dispatch(setDate(date))}))(Date);
