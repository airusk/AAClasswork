//PRESENTATIONAL
import React from 'react';
import {TodoListItem} from './todo_list_item';
import { TodoForm } from '../todo_list/todo_form';
export const TodoList = (props) => {
  // debugger
  return(
    <div>
      <ul>
        {
          props.todos.map(todo => { 
            return <TodoListItem todo={todo}/>
          })
        }
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );
};

