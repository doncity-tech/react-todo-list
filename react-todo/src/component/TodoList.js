import React from 'react'

const TodoList = () => {
  const taskList = [
    'My first Todo',
    'My second Todo',
    'My third Todo',
    'My forth Todo'
  ];

  return (
    <ul>
      {taskList.map(list => <li>{list}</li>)}
    </ul>
  );
}

export default TodoList