import React from 'react'
import { useRef, useState } from 'react';

const AddForm = ({ onSubmit }) => {
    const [title, setTitle] = useState([]);

    const todoNameRef = useRef();

    const handleTextChange = (e) => {
        setTitle(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title);
        setTitle('');
        todoNameRef.current.focus();
    };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        <input type='text' ref={todoNameRef} value={title} onChange={handleTextChange} className='todo-additem'/>
        <button className='todo-add'>Add</button>
    </form>
  )
}

export default AddForm;