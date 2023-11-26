import TodoList from './TodoList';
import AddForm from './AddForm';
import './App.css';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let saveTodos;
    if (localStorage.getItem('todos') === null) {
      saveTodos = [];
    } else {
      saveTodos = JSON.parse(localStorage.getItem('todos'));
    }
    setTodos(saveTodos);
  }, []);

  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleAddFormSubmit = (title) => {
    if (title === '') return;
    const newTodos = [...todos];
    newTodos.push({title: title, id: uuidv4(), isCompleted: false});
    updateTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      return {
        title: todo.title,
        id: todo.id,
        isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
      };
    });
    updateTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(newTodos);
  };

  const handleTodoPurge = () => {
    if (!window.confirm('Sure?')) {
      return
    }
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    updateTodos(newTodos);
  };

  return (
    <>
      <h1 className='title'>TODO LIST</h1>
      <section className='todo-content'>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        <AddForm onSubmit={handleAddFormSubmit}/>
        <p className='todo-uncompleted'>uncompleted&nbsp;:&nbsp;{todos.filter((todo) => !todo.isCompleted).length}</p>
        <button onClick={handleTodoPurge} className='todo-purge'>Purge</button>
      </section>
    </>
  );
}

export default App;