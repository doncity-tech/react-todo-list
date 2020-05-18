import React from 'react'
import '../style.css'

const AddTodo = () => {
  return (
    <form>
      <input type="text" placeholder="Add Task"></input>
      <button>+Task</button>
    </form>
  );
}

export default AddTodo
