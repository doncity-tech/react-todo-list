import React from 'react';
import './style.css';

// function Component
const Template = ({ theValue }) => {
  return (
    <div>
      <ul>
        <li>{theValue}</li>
      </ul>
    </div>
  )
}
class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Add Task"></input>
          <button>+Task</button>
        </div>
        <Template theValue={'The first task'} />
      </div>
    );
  };
}

export default App