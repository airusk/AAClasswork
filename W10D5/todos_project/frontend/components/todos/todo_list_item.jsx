import TodoList from './todo_list';
import React from 'react';
export const TodoListItem = (props) => {
  return(
    <li>
      {props.todo.id}
      <br/>
      {props.todo.title}
      <br/>
      {props.todo.body}
      <br/><br/>
    </li>
  );
}