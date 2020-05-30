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
		const updateTask = this.state.tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		this.setState({ tasks: updateTask });
	};

	deleteTask = (id) => {
		const remainingTasks = this.state.tasks.filter((task) => id !== task.id);
		this.setState({ tasks: remainingTasks });
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
								deleteTask={this.deleteTask}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default TodoList;
