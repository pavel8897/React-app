import React from 'react';
import './index.css';

const Table = (props) => {	
	return (
		<tr>
			<td>{props.name}</td>
			<td>{props.fio}</td>
			<td><input onChange={(e) => props.changeDay(e, props.index)} defaultValue={props.workDay} /></td>
			<td><input onChange={(e) => props.changePay(e, props.index)} defaultValue={props.pay} /></td>
			<td>{props.workDay * props.pay}$</td>
		</tr>
	);
}

export default Table;