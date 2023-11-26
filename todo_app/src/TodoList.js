import Todo from './Todo';
import React from 'react'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {

  const todoItems = todos.map((todo) => {
    return (
      <Todo 
      todo={todo} 
      key={todo.id} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo}
      />
    );
  });

  return (
    
    <ul className='todo-list'>{todoItems}</ul>
  );
};

export default TodoList;