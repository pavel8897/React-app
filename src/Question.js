import React from 'react';
import './index.css';

const Question = (props) => {
	return (		
		<div>
			<p>{props.quest}</p>
			{props.flag ?
			<p>Your answer</p>			
			:
			<input id={'option' + props.index} onChange={(e) => props.setOption(e, props.index)} defaultValue={props.option} />	
			}
			<input type="submit" value="Сдать тест" onClick={() => props.getOption(props.index)}  />
		</div>
	);
}

export default Question;