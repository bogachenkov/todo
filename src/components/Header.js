import React from 'react';
import Date from "./Date";
import Counter from './Counter';

function Header(props) {
	return (
		<div className="header">
			<Date/>
			<Counter/>
		</div>
	);
}


export default Header;
