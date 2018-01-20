import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';

const TodoPanel = (props) => {
  const findComplete = () => {
    let complete = [];
    props.todos.map((todo) => {
      if(todo.isComplete) {
        complete.push(todo);
      }
    })
    return complete;
  };

  const findIncomplete = () => {
    let incomplete = [];
    props.todos.map((todo) => {
      if(!todo.isComplete) {
        incomplete.push(todo);
      }
    })
    return incomplete;
  };
//Todo: Instead of interating twice, run a filter on props.todos that removes incomplete todos and unshifts them onto the top of their own array.
  return (
    <div>
      <TodoForm addTodo = { props.addTodo }/>
      <TodoList
        className = "todo-list todo-list--incomplete"
        todos = {findIncomplete()}
        handleCheckbox = {props.handleCheckbox}
        removeTodo = {props.removeTodo}
      />
      <TodoList
        className = "todo-list todo-list--complete"
        todos = {findComplete()}
        handleCheckbox = {props.handleCheckbox}
        removeTodo = {props.removeTodo}
      />
    </div>
  )
};

export default TodoPanel;
