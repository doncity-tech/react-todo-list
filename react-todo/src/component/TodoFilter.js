import React from 'react';

const TodoFilter = (props) => {
	const allTasks = () => {
		props.allTasks();
	};
	const completedTasks = () => {
		props.completedTasks();
	};
	const incompleteTasks = () => {
		props.incompleteTasks();
	};
	return (
		<div>
			<button onClick={allTasks}>All</button>
			<button onClick={completedTasks}>Completed</button>
			<button onClick={incompleteTasks}>Incomplete</button>
		</div>
	);
};

export default TodoFilter;
