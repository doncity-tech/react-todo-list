import React from 'react'
import '../style.css'

class AddTodo extends React.Component {
  state = { userName: '' };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      this.state.userName
    );
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Add Task"
          onChange={e => this.setState({ userName: e.target.value })}
          value={this.state.userName} required />
        <button className="add-task">+Task</button>
      </form>
    );
  }
}

export default AddTodo
