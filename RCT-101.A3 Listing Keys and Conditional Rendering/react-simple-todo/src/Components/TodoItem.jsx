import React from 'react'
import TodoList from './TodoList';

const TodoItem = ({ title, id, status, handleDelete }) => {
    // console.log(title, status,id)
  return <div>
      <TodoList title={title} id={id} status={status} handleDelete={handleDelete}  />
  </div>;
};

export default TodoItem