import React from 'react'
import TodoList from './component/TodoList'
import TodoFilter from './component/TodoFilter'
import './style.css'

// function Component
class Template extends React.Component {
  state = {
    input: '',
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>React Todo List</h1>
        </div>
        <div>
          <TodoList />
        </div>
        <div className="footer">
          <TodoFilter />
        </div>
      </div>
    )
  }

}
class App extends React.Component {
  render() {
    return (<Template />);
  };
}

export default App