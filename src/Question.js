import React from 'react';
import './index.css';

const Question = (props) => {	
	return (
		<div>
			<p>{props.quest}</p>
			<input id={'option' + props.index} onChange={(e) => props.setOption(e, props.index)} defaultValue={props.option} />
			{(typeof props.flag == "boolean") ?			
				props.flag ?
				<p className="green">Ваш ответ {props.option} правильнй</p>			
				:
				<div>
					<p className="red">Ваш ответ {props.option} не правильный</p>
					<p className="green">Правильный ответ {props.answer}</p>
				</div>
			:
			<p></p>
			}
			<input type="submit" value="Сдать тест" onClick={() => props.getOption(props.index)}  />
		</div>
	);
}

export default Question;