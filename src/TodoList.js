import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
  const todoNode = props.todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id}/>)
  });
  return (<ul>{todoNode}</ul>);
}

export default TodoList;