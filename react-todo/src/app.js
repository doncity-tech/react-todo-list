import React from 'react';
import { nanoid } from 'nanoid';
import Todo from './component/Todo';
import Form from './component/Form';
import FilterButton from './component/FilterButon';
import './style.css';

const FILTER_MAP = {
	All: () => true,
	Active: (task) => !task.completed,
	Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

class App extends React.Component {
	state = {
		tasks: [],
		filter: 'All',
	};

	changeState = async (name) => {
		await this.setState({ filter: name });
	};

	checkStatus = (name) => {
		let status = name === this.state.filter;
		return status;
	};

	filterList = FILTER_NAMES.map((name) => (
		<FilterButton
			key={name}
			name={name}
			changeState={this.changeState}
			isPressed={this.checkStatus(name)}
		/>
	));

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

	editTask = (id, newTask) => {
		const editedTask = this.state.tasks.map((task) => {
			if (id === task.id) {
				return { ...task, task: newTask };
			}
			return task;
		});
		this.setState({ tasks: editedTask });
	};

	deleteTask = (id) => {
		const remainingTasks = this.state.tasks.filter((task) => id !== task.id);
		this.setState({ tasks: remainingTasks });
	};

	render() {
		return (
			<div className='container'>
				<div className='header'>
					<h1>React Todo List</h1>
				</div>
				<div>
					<div className='addtodo'>
						<Form onSubmit={this.addTodoHandler} />
					</div>
					<div className='todolist'>
						<ul>
							{this.state.tasks
								.filter(FILTER_MAP[this.state.filter])
								.map((list) => (
									<Todo
										task={list.task}
										completed={list.completed}
										id={list.id}
										key={list.id}
										toggleTaskCompleted={this.toggleTaskCompleted}
										editTask={this.editTask}
										deleteTask={this.deleteTask}
									/>
								))}
						</ul>
					</div>
				</div>
				<div className='footer'>
					<div>{this.filterList}</div>
				</div>
			</div>
		);
	}
}

export default App;
