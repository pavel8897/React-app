import React, { useReducer } from 'react';
import {useState} from 'react';
import Question from './Question';
import './index.css';

const App = () => {
	const [quest, setQuest] = useState([
		{quest: 'Где производят автомобили Bugatti?', answer: 'Франция', option: '', flag: ''},
		{quest: 'Какая компания производит наибольшее количество шин в мире', answer: 'Лего', option: '', flag: ''},
		{quest: 'Где находится самая большая пустыня?', answer: 'Антарктида', option: '', flag: ''}
	])	

	const setOption = (e, index) => {
		quest[index].option = (e.target.value).trim()
		setQuest(quest)		
	}

	const getOption = (index) => {
		const newArr = quest.slice()
		newArr[index].option == newArr[index].answer ? newArr[index].flag = true : newArr[index].flag = false
		setQuest(newArr)
	}
	
	const work = quest.map((item, index)=>{
		return <Question 
			quest = {item.quest}
			answer = {item.answer}
			option = {item.option}
			key = {index}
			index = {index}			
			setOption = {setOption}
			getOption = {getOption}
			flag = {item.flag}
			item = {item}
		/>
	})
	
	return (
		<div>
			{work}
		</div>
	);
}

export default App;