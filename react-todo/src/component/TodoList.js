import React from 'react';
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
				{ id: 'todo-0', task: addedTask, completed: false },
			],
		}));
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
							/>
						))}
					</ul>
				</div>
			</div>
		);
	}
}

export default TodoList;
