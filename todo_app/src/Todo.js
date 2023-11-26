import React from 'react'

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id);
    };

    const handleTodoDelete = () => {
        deleteTodo(todo.id);
    };

  return (
    <li className='todo-item'>
        <input 
        type='checkbox' 
        checked={todo.isCompleted}
        readOnly
        onChange={handleTodoClick}
        className='todo-check'
        id={todo.id}
        />
        <label htmlFor={todo.id} className='todo-label'>{todo.title}</label>
        <button onClick={handleTodoDelete} className='todo-remove'>x</button>
    </li>
  );
};

export default Todo;