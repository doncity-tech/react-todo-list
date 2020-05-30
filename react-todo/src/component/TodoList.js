import React from 'react';
import Todo from './Todo';

class AddTodo extends React.Component {
	state = { task: '' };
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.task);
		this.setState({ task: '' });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					placeholder='Add Task'
					onChange={(e) => this.setState({ task: e.target.value })}
					value={this.state.task}
					required
				/>
				<button className='add-task'>+Task</button>
			</form>
		);
	}
}

class TodoList extends React.Component {
	state = {
		tasks: [],
	};
	addTodoHandler = (addedTask) => {
		this.setState((prevState) => ({
			tasks: [
				...prevState.tasks,
				{ id: 'todo-0', task: addedTask, completed: false },
			],
		}));
	};

	render() {
		return (
			<div>
				<div className='addtodo'>
					<AddTodo onSubmit={this.addTodoHandler} />
				</div>
				<div className='todolist'>
					<ul>
						{this.state.tasks.map((list) => (
							<Todo
								task={list.task}
								completed={list.completed}
								id={list.id}
								key={list.id}
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default TodoList;
