import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux'
import {setFilter} from "../actions/index";

function Filters(props) {
	return (
		<div className="filters">
			<Divider/>
			<a className={props.filter === 'ALL' ? "filters__item filters__item-active" : "filters__item"}
					onClick={() => props.onSetFilter('ALL')}>
				<i className="material-icons">event_note</i>
			</a>
			<a className={ props.filter === 'COMPLETED' ? "filters__item filters__item-active" : "filters__item"}
			   onClick={() => props.onSetFilter('COMPLETED')}>
				<i className="material-icons">event_available</i>
			</a>
			<a className={props.filter === 'UNCOMPLETED' ? "filters__item filters__item-active" : "filters__item"}
			   onClick={() => props.onSetFilter('UNCOMPLETED')}>
				<i className="material-icons">event_busy</i>
			</a>
			<Divider/>
		</div>
	);
}

Filters.propTypes = {
	filter: PropTypes.string.isRequired
};


export default connect(state => ({filter: state.filter}),
		dispatch => ({onSetFilter: filter => dispatch(setFilter(filter))}))(Filters);
