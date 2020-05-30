import React from 'react';

class Form extends React.Component {
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

export default Form;
