import React, { useState } from 'react';

const Todo = (props) => {
	const [isEditing, setEditing] = useState(false);

	const editingTemplate = (
		<div>
			<form className='edit-form'>
				<div>
					<input type='text' />
				</div>
				<div>
					<button>Save</button>
					<button>Cancel</button>
				</div>
			</form>
		</div>
	);

	const viewTemplate = (
		<div>
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
		</div>
	);

	return <li id={props.id}>{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;
