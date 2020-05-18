import React from 'react'
import TodoList from './component/TodoList'
import AddTodo from './component/AddTodo'
import TodoFilter from './component/TodoFilter'
import './style.css'

// function Component
const Template = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>React Todo List</h1>
      </div>
      <div className="addtodo">
        <AddTodo />
      </div>
      <div className="todolist">
        <TodoList />
      </div>
      <div className="footer">
        <TodoFilter />
      </div>
    </div>
  )
}
class App extends React.Component {
  render() {
    return (<Template />);
  };
}

export default App