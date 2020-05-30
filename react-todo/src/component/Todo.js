import React from 'react';

const Todo = (props) => {
	return (
		<li id={props.id}>
			<input type='checkbox' defaultChecked={props.completed} />
			<span className='todo-text'>{props.task}</span>
		</li>
	);
};

export default Todo;
