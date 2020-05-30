import React from 'react';

const Todo = (props) => {
	return (
		<li id={props.id}>
			<input
				type='checkbox'
				defaultChecked={props.completed}
				onChange={(e) => {
					props.toggleTaskCompleted(props.id);
				}}
			/>
			<button
				className='delBtn'
				onClick={(e) => {
					props.deleteTask(props.id);
				}}>
				X
			</button>
			<span className='todo-text'>{props.task}</span>
		</li>
	);
};

export default Todo;
