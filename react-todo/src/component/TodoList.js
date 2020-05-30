import React from 'react';
import { nanoid } from 'nanoid';
import Todo from './Todo';
import Form from './Form';

class TodoList extends React.Component {
	state = {
		tasks: [],
	};
	addTodoHandler = (addedTask) => {
		this.setState((prevState) => ({
			tasks: [
				...prevState.tasks,
				{ id: 'todo-' + nanoid(), task: addedTask, completed: false },
			],
		}));
	};

	toggleTaskCompleted = (id) => {
		console.log(this.state.tasks[0]);
	};

	render() {
		return (
			<div>
				<div className='addtodo'>
					<Form onSubmit={this.addTodoHandler} />
				</div>
				<div className='todolist'>
					<ul>
						{this.state.tasks.map((list) => (
							<Todo
								task={list.task}
								completed={list.completed}
								id={list.id}
								key={list.id}
								toggleTaskCompleted={this.toggleTaskCompleted}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default TodoList;
