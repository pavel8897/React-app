import React, { useReducer } from 'react';
import {useState} from 'react';
import Question from './Question';
import './index.css';

const App = () => {
	const [quest, setQuest] = useState([
		{quest: 'Где производят автомобили Bugatti?', answer: 'Франция', option: '', flag: false},
		{quest: 'Какая компания производит наибольшее количество шин в мире', answer: 'Лего', option: '', flag: false},
		{quest: 'Где находится самая большая пустыня?', answer: 'Антарктида', option: '', flag: false}
	])	

	const setOption = (e, index) => {
		quest[index].option = e.target.value
		setQuest(quest)
	}

	const getOption = (index) => {
		/*let option = document.querySelector('#option'+index)*/
		quest[index].option == quest[index].answer ? quest[index].flag = true : quest[index].flag = false
		setQuest(quest)
	}

	const work = quest.map((item, index)=>{
		return <Question 
			quest = {item.quest}
			answer = {item.answer}
			option = {item.option}
			key = {index}
			index = {index}	
			getOption = {getOption}
			setOption = {setOption}
			flag = {item.flag}
		/>
	})
	
	return (
		<div>
			{work}
		</div>
	);
}

export default App;