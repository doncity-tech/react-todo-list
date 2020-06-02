import React, { useEffect, useRef, useState } from 'react';

const Todo = (props) => {
	const [isEditing, setEditing] = useState({ status: false, task: '' });
	const editFieldRef = useRef(null);
	const editButtonRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.editTask(props.id, isEditing.task);
		setEditing({ status: false, task: '' });
	};

	const editingTemplate = (
		<div>
			<form className='edit-form' onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						value={isEditing.task}
						onChange={(e) => {
							setEditing({ status: true, task: e.target.value });
						}}
						ref={editFieldRef}
					/>
				</div>
				<div>
					<button type='submit'>Save</button>
					<button onClick={() => setEditing({ status: false })}>Cancel</button>
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
			<span
				className='todo-text'
				onClick={(e) => {
					setEditing({ status: true, task: props.task });
				}}
				ref={editButtonRef}>
				{props.task}
			</span>
		</div>
	);

	useEffect(() => {
		console.log('Side Effect');
	});
	console.log('Side Effect1');
	return (
		<li id={props.id}>{isEditing.status ? editingTemplate : viewTemplate}</li>
	);
};

export default Todo;
