import React from 'react'

const TodoList = () => {
  const taskList = [
    'My first Todo',
    'My second Todo',
    'My third Todo',
    'My forth Todo',
  ]
  const list = taskList.map(list => `<li>My first Todo</li>`)

  return (
    <ul>
      <li>My first Todo</li>
      <li>My first Todo</li>
    </ul>
  );
}

export default TodoList