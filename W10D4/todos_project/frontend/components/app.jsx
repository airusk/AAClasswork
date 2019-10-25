import React from 'react';
import ReactDOM from 'react-dom';
import TodoListContainer from './todos/todo_list_container';

const App = () => {
  return (
    <div>
      <h1>Todos App</h1>
      <TodoListContainer />
    </div>
  )
};

export default App;
