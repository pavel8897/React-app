import React, { useReducer } from 'react';
import {useState} from 'react';
import Table from './Table';
import Result from './Result';
import './index.css';

const App = () => {
	const [users, setUsers] = useState([
		{name: 'Ivan', fio: 'Ivanov', workDay: 17, pay: 320},
		{name: 'Petya', fio: 'Petrov', workDay: 26, pay: 380},
		{name: 'Kolya', fio: 'Sidorov', workDay: 93, pay: 490},
		{name: 'Leha', fio: 'Pavlov', workDay: 119, pay: 790}
	])

	const changeDay = (e, index) => {
		const newArr = users.slice();
		newArr[index].workDay = Number(e.target.value);
		setUsers(newArr);
	}

	const changePay = (e, index) => {
		const newArr = users.slice();
		newArr[index].pay = Number(e.target.value);
		setUsers(newArr);
	}
	
	const worker = users.map((user, index)=>{
		return <Table 
			name = {user.name}
			fio = {user.fio}
			workDay = {user.workDay}  
			pay = {user.pay}
			key = {index}
			index = {index}
			changeDay = {changeDay}
			changePay = {changePay}
		/>
	})

	return (		
		<div className="tableName">
			<table>
				<tbody>
					{worker}
				</tbody>
			</table>
			<Result users = {users} />
		</div>
	);
}

export default App;