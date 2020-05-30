import React from 'react';
import { nanoid } from 'nanoid';
import Todo from './component/Todo';
import Form from './component/Form';
import TodoFilter from './component/TodoFilter';
import './style.css';

class App extends React.Component {
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

	allTasks = () => {
		console.log('all');
	};
	completedTasks = () => {
		// this.state.tasks.map((task) => {
		// 	if (task.completed === true) {
		// 		return;
		// 	}
		// });
	};
	incompleteTasks = () => {
		console.log('incomplete');
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
							{this.state.tasks.map((list) => (
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
					<TodoFilter
						allTasks={this.allTasks}
						completedTasks={this.completedTasks}
						incompleteTasks={this.incompleteTasks}
					/>
				</div>
			</div>
		);
	}
}

export default App;
